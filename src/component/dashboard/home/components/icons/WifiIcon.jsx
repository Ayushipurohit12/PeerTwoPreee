export default function WifiIcon() {
  return (
    <div style={{ width: 48, height: 48, border: "2.5px solid #1a6fb5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <div style={{ position: "absolute", bottom: 9, left: "50%", transform: "translateX(-50%)", width: 5, height: 5, background: "#1a6fb5", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", width: 10, height: 6, border: "2px solid #1a6fb5", borderRadius: "50% 50% 0 0", borderBottom: "none" }} />
      <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", width: 18, height: 10, border: "2px solid #1a6fb5", borderRadius: "50% 50% 0 0", borderBottom: "none" }} />
      <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", width: 28, height: 15, border: "2px solid #1a6fb5", borderRadius: "50% 50% 0 0", borderBottom: "none" }} />
    </div>
  );
}
