import appStoreImg from "../../../../assets/Finance-App-Mobile-AppStore-300x100.webp";
import playStoreImg from "../../../../assets/Finance-App-Mobile-Google-Play-300x89.webp";
import phoneMain from "../../../../assets/Screens-4-04-1024x1024.webp";
import phoneSecondary from "../../../../assets/Website-Screen-2-2-322x650.webp";
import QrCodeIcon from "./icons/QrCodeIcon";

export default function DownloadSection() {
  return (
    <div className="content-card download-section">
      <div className="download-text">
        <h2>
          <strong>Download</strong> the LenDenClub
          <br />
          Mobile App
        </h2>
        <p>
          Diversify your portfolio with LenDenClub and earn attractive
          interest by lending money in loans.
        </p>
        <div className="app-buttons-row">
          <img src={appStoreImg} alt="Download on App Store" className="app-store-img" />
          <img src={playStoreImg} alt="Get it on Google Play" className="google-play-img" />
          <QrCodeIcon />
        </div>
      </div>
      <div className="phone-mockup-wrap">
        <img src={phoneSecondary} alt="" className="phone-img-back" />
        <img src={phoneMain} alt="LenDenClub mobile app" className="phone-img-front" />
      </div>
    </div>
  );
}
