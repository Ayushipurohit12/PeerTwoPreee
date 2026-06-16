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
    navigator.userAgentData?.platform ||
    navigator.platform ||
    "Web Browser",
  deviceType: /iPhone|iPad/i.test(navigator.userAgent)
    ? "IOS"
    : /Android/i.test(navigator.userAgent)
    ? "ANDROID"
    : "WEB",
  ipAddress: "0.0.0.0",
});

// =====================================================
// OTP APIs
// =====================================================

export const sendOtpToMobile = async (mobile) => {
  const response = await axios.post(
    `${BASE_URL}/send-otp-forVerify-mobile?mobile=${mobile}`
  );

  return response.data;
};

export const sendOtpToEmail = async (email) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/send-otp-forVerify-email?email=${encodeURIComponent(email)}`
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

  const response = await axios.post(
    `${BASE_URL}/verify-otp-auth-Reg`,
    {
      deviceId: device.deviceId,
      email,
      otp,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      ipAddress: device.ipAddress,
    }
  );

  return response.data;
};

export const verifyMobileOtp = async ({ mobile, otp }) => {
  const device = getDeviceInfo();

  const response = await axios.post(
    `${BASE_URL}/verify-otp-auth-Reg`,
    {
      deviceId: device.deviceId,
      mobile,
      otp,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      ipAddress: device.ipAddress,
    }
  );

  return response.data;
};

// =====================================================
// Registration
// =====================================================

export const registerUser = async ({
  email,
  password,
  mobile,
  role,
}) => {
  const device = getDeviceInfo();

  const response = await axios.post(
    `${BASE_URL}/register`,
    {
      email,
      password,
      mobile,
      role: role.toUpperCase(),
      deviceId: device.deviceId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      ipAddress: device.ipAddress,
    }
  );

  return response.data;
};

// =====================================================
// Login
// =====================================================

// Same API reuse
export const sendLoginOtp = sendOtpToMobile;

// Same API reuse
export const verifyLoginOtp = verifyMobileOtp;

export const loginWithPassword = async ({
  email,
  password,
}) => {
  const device = getDeviceInfo();

  // endpoint: POST /login-session
  // "username" accepts email OR mobile number
  const response = await axios.post(
    `${BASE_URL}/login-session`,
    {
      username: email,        // email or mobile (e.g. "user@example.com / 88888888")
      password,
      deviceId: device.deviceId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      ipAddress: device.ipAddress,
    }
  );

  return response.data;
};
