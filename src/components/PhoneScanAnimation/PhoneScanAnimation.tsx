import React from "react";
import "./PhoneScanAnimation.css";
import qrImage from "../../assets/qr.png";

const PhoneScanAnimation: React.FC = () => {
	return (
		<div className="phone-frame">
			<div className="scan-line"></div>
			<div className="screen">
				<img src={qrImage} alt="QR code" className="qr-image" />
			</div>
		</div>
	);
};

export default PhoneScanAnimation;
