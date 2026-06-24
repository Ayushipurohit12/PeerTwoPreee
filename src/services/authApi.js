import axios from "axios";

// CORS FIX: empty string → Vite proxy forwards /api/* to http://192.168.1.16:8080
// (proxy config is in vite.config.js)
const BASE_URL = "/api/v1/auth";

// =====================================================
// Device Info Helper
// =====================================================

const getDeviceInfo = () => ({
  deviceId: `DEV-${Math.random().toString(36).slice(2, 11).toUpperCase()}`,
  deviceName:
    navigator.userAgentData?.platform || navigator.platform || "Web Browser",
  deviceType: /iPhone|iPad/i.test(navigator.userAgent)
    ? "IOS"
    : /Android/i.test(navigator.userAgent)
      ? "ANDROID"
      : "WEB",
  ipAddress: "0.0.0.0",
});

export const saveAuthTokens = (loginResponse) => {
  const loginData = loginResponse?.data ?? loginResponse;
  if (!loginData) return;

  const storeValue = (key, value) => {
    if (value === undefined || value === null) return;
    const stored = typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, stored);
  };

  storeValue("tokenType", loginData.tokenType || "Bearer");
  storeValue("accessToken", loginData.accessToken);
  storeValue("refreshToken", loginData.refreshToken);
  storeValue("accessTokenExpiresIn", loginData.accessTokenExpiresIn);
  storeValue("refreshTokenExpiresIn", loginData.refreshTokenExpiresIn);
  storeValue("roles", loginData.roles);
  storeValue("authId", loginData.authId);
  storeValue("userId", loginData.userId || loginData.authId);
  storeValue("fullName", loginData.fullName);
  storeValue("email", loginData.email);
  storeValue("mobile", loginData.mobile);
};

const getAuthHeaders = () => {
  const tokenType = localStorage.getItem("tokenType") || "Bearer";
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return {};

  return {
    Authorization: `${tokenType} ${accessToken}`,
  };
};

export const clearAuthStorage = () => {
  const keysToRemove = [
    "isLogin",
    "userData",
    "authId",
    "userId",
    "fullName",
    "email",
    "mobile",
    "tokenType",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresIn",
    "refreshTokenExpiresIn",
    "userCreated",
    "accountStatus",
  ];
  keysToRemove.forEach((key) => localStorage.removeItem(key));
};

export const logout = async () => {
  try {
    const refresh = localStorage.getItem("refreshToken") || null;
    const payload = refresh ? { refreshToken: refresh } : {};

    const response = await axios.post(`${BASE_URL}/logout`, payload, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.warn("Logout request failed:", error);
    throw error;
  }
};

// =====================================================
// Refresh Token
// =====================================================

export const refreshToken = async () => {
  const refresh = localStorage.getItem("refreshToken");
  if (!refresh) throw new Error("No refresh token available");

  try {
    const device = getDeviceInfo();
    const resp = await axios.post(`${BASE_URL}/refresh`, {
      refreshToken: refresh,
      deviceId: device.deviceId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      ipAddress: device.ipAddress,
    });

    const data = resp.data ?? resp;
    // Persist new tokens if returned in standard shape
    try {
      saveAuthTokens(data);
    } catch (e) {
      console.warn("Failed saving refreshed tokens:", e);
    }

    return data;
  } catch (error) {
    console.warn("Refresh token request failed:", error);
    throw error;
  }
};

// Attach an axios response interceptor to auto-refresh access tokens on 401.
// Call `setupAxiosInterceptors()` once at app startup (e.g. in main.jsx) if desired.
let _isRefreshing = false;
let _refreshPromise = null;

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalRequest = err.config;
      if (!originalRequest) return Promise.reject(err);

      const status = err.response?.status;
      const didRetry = originalRequest._retry;

      if (status === 401 && !didRetry) {
        originalRequest._retry = true;

        if (!_isRefreshing) {
          _isRefreshing = true;
          _refreshPromise = refreshToken()
            .then((r) => r)
            .catch((e) => {
              throw e;
            })
            .finally(() => {
              _isRefreshing = false;
              _refreshPromise = null;
            });
        }

        try {
          await _refreshPromise;
          // update headers and retry original request
          originalRequest.headers = {
            ...(originalRequest.headers || {}),
            ...getAuthHeaders(),
          };
          return axios(originalRequest);
        } catch (e) {
          clearAuthStorage();
          return Promise.reject(e);
        }
      }

      return Promise.reject(err);
    },
  );
};

// =====================================================
// OTP APIs
// =====================================================

export const sendOtpToMobile = async (mobile) => {
  const response = await axios.post(
    `${BASE_URL}/send-otp-forVerify-mobile?mobile=${mobile}`,
  );

  return response.data;
};

export const sendOtpToEmail = async (email) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/send-otp-forVerify-email?email=${encodeURIComponent(email)}`,
    );

    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    console.error("ERROR:", error);
    console.error("Message:", error.message);
    console.error("Response:", error.response?.data);
    throw error;
  }
};

// =====================================================
// OTP Verification
// =====================================================

export const verifyEmailOtp = async ({ email, otp }) => {
  const device = getDeviceInfo();

  const response = await axios.post(`${BASE_URL}/verify-otp-auth-Reg`, {
    deviceId: device.deviceId,
    email,
    otp,
    deviceName: device.deviceName,
    deviceType: device.deviceType,
    ipAddress: device.ipAddress,
  });

  return response.data;
};

export const verifyMobileOtp = async ({ mobile, otp }) => {
  const device = getDeviceInfo();

  const response = await axios.post(`${BASE_URL}/verify-otp-auth-Reg`, {
    deviceId: device.deviceId,
    mobile,
    otp,
    deviceName: device.deviceName,
    deviceType: device.deviceType,
    ipAddress: device.ipAddress,
  });

  return response.data;
};

// =====================================================
// Registration
// =====================================================

export const registerUser = async ({ email, password, mobile, role }) => {
  const device = getDeviceInfo();

  const response = await axios.post(`${BASE_URL}/register`, {
    email,
    password,
    mobile,
    role: role.toUpperCase(),
    deviceId: device.deviceId,
    deviceName: device.deviceName,
    deviceType: device.deviceType,
    ipAddress: device.ipAddress,
  });

  return response.data;
};

// =====================================================
// Login
// =====================================================

// Same API reuse
export const sendLoginOtp = sendOtpToMobile;

// Same API reuse
export const verifyLoginOtp = verifyMobileOtp;

export const loginWithPassword = async ({ email, password }) => {
  const device = getDeviceInfo();

  // endpoint: POST /login-session
  // "username" accepts email OR mobile number
  const response = await axios.post(`${BASE_URL}/login-session`, {
    username: email, // email or mobile (e.g. "user@example.com / 88888888")
    password,
    deviceId: device.deviceId,
    deviceName: device.deviceName,
    deviceType: device.deviceType,
    ipAddress: device.ipAddress,
  });

  return response.data;
};

export const isUserProfileCreated = () =>
  localStorage.getItem("userCreated") === "true";

export const markUserProfileCreated = () => {
  localStorage.setItem("userCreated", "true");
};

export const hasExistingUserProfile = (loginResponse) => {
  const loginData = loginResponse?.data ?? loginResponse;
  const storedFullName = localStorage.getItem("fullName") || "";
  const responseFullName = loginData?.fullName || "";

  return (
    isUserProfileCreated() ||
    Boolean(responseFullName.trim()) ||
    Boolean(storedFullName.trim())
  );
};

export const saveLoginSession = (loginResponse, { fullName } = {}) => {
  const loginData = loginResponse?.data ?? loginResponse;
  if (!loginData) return;

  const fullNameValue = fullName ?? loginData.fullName ?? "";

  localStorage.setItem("isLogin", "true");
  localStorage.setItem("userData", JSON.stringify(loginData));
  localStorage.setItem("authId", loginData.authId ?? "");
  localStorage.setItem("userId", loginData.userId ?? loginData.authId ?? "");
  localStorage.setItem("fullName", fullNameValue);
  localStorage.setItem("email", loginData.email ?? "");
  localStorage.setItem("mobile", loginData.mobile ?? "");
  localStorage.setItem("tokenType", loginData.tokenType ?? "");
  localStorage.setItem("accessToken", loginData.accessToken ?? "");
  localStorage.setItem("refreshToken", loginData.refreshToken ?? "");
  localStorage.setItem(
    "accessTokenExpiresIn",
    loginData.accessTokenExpiresIn ?? "",
  );
  localStorage.setItem(
    "refreshTokenExpiresIn",
    loginData.refreshTokenExpiresIn ?? "",
  );

  if (fullNameValue.trim()) {
    markUserProfileCreated();
  }
};

let _createUserProfilePromise = null;

export const createUserProfile = async ({
  authId,
  fullName,
  email,
  mobile,
  roleName,
  deviceId = "DEV-123456789",
  deviceType = "MOBILE",
  os = "Android 14",
  ipAddress = "192.168.1.100",
  actionBy = "SYSTEM",
}) => {
  if (isUserProfileCreated()) {
    return { alreadyCreated: true };
  }

  if (_createUserProfilePromise) {
    return _createUserProfilePromise;
  }

  _createUserProfilePromise = axios
    .post(
      "/api/v1/users",
      {
        authId,
        fullName,
        email,
        mobile,
        roleName,
        deviceId,
        deviceType,
        os,
        ipAddress,
        actionBy,
      },
      {
        headers: getAuthHeaders(),
      },
    )
    .then((response) => {
      markUserProfileCreated();
      localStorage.setItem("accountStatus", "KYC PENDING");
      return response.data;
    })
    .catch((error) => {
      if (error?.response?.status === 409) {
        markUserProfileCreated();
        return {
          alreadyCreated: true,
          message:
            error?.response?.data?.message || "User profile already exists.",
        };
      }

      throw error;
    })
    .finally(() => {
      _createUserProfilePromise = null;
    });

  return _createUserProfilePromise;
};

// =====================================================
// User Profile - update other's details
// PUT /api/v1/users/{userid}/profile
// =====================================================
export const updateUserProfile = async (userId, otherDetails = {}) => {
  if (!userId) throw new Error("Missing userId for profile update");

  try {
    const resp = await axios.put(
      `/api/v1/users/${userId}/profile`,
      otherDetails,
      {
        headers: getAuthHeaders(),
      },
    );

    return resp.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

// =====================================================
// KYC - Aadhar Verification
// =====================================================

export const sendOtpForAdharVerify = async (adharNumber) => {
  try {
    const response = await axios.post(
      `/api/v1/users/kyc/sendOtp-forAdharVerify?adharNumber=${adharNumber}`,
      {},
      {
        headers: getAuthHeaders(),
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error sending OTP for Aadhar verification:", error);
    throw error;
  }
};

export const verifyAdhar = async (adharNumber, mobileNumber, otp) => {
  try {
    const response = await axios.post(
      `/api/v1/users/kyc/verify-adhar?adharNumber=${adharNumber}&mobileNumber=${mobileNumber}&otp=${otp}`,
      {},
      {
        headers: getAuthHeaders(),
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error verifying Aadhar:", error);
    throw error;
  }
};
