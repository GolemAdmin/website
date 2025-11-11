import React from "react";
import "./AboutSection.css";
import qrIcon from "../../assets/qr.png";
import batteryIcon from "../../assets/battery.png";
import walletIcon from "../../assets/wallet.png";
import screenshotIcon from "../../assets/screenshot.png";
import messagesIcon from "../../assets/messages.png";

const apps = [
	{
		title: "QR Scanner & Barcode Reader",
		desc: "Scan and generate any QR or barcode instantly — fast, private, and ad-free.",
		icon: qrIcon,
		link: "#",
	},
	{
		title: "Battery Life Monitor and Alarm",
		desc: "Track your phone’s battery health, temperature, and get smart charging alerts.",
		icon: batteryIcon,
		link: "https://play.google.com/store/apps/details?id=com.golemapps.batteryHealth",
	},
	{
		title: "Cards - Mobile Wallet",
		desc: "Store loyalty, ID, and membership cards securely — your digital wallet made simple.",
		icon: walletIcon,
		link: "https://play.google.com/store/apps/details?id=com.golemapps.cardwallet",
	},
	{
		title: "Screenshot & Image Editor",
		desc: "Capture, crop, and enhance screenshots effortlessly with a clean, modern interface.",
		icon: screenshotIcon,
		link: "https://play.google.com/store/apps/details?id=com.golemapps.screenshotLite",
	},
	{
		title: "WAMR: Reveal Deleted Messages",
		desc: "Recover deleted messages, photos, and videos instantly — stay in control of what others unsend.",
		icon: messagesIcon,
		link: "https://play.google.com/store/apps/details?id=com.golemapps.messagerecovery",
	},
];

const AboutSection: React.FC = () => {
	return (
		<section className="about-section">
			<div className="about-container">
				<h2>About UtilitySoft Labs</h2>
				<p className="about-description">
					UtilitySoft Labs is an independent Android studio focused on building
					smart, privacy-friendly utilities. From QR tools to battery monitors —
					we create reliable apps that just work.
				</p>

				<div className="apps-grid" id="apps">
					{apps.map((app) => (
						<div key={app.title} className="app-card">
							<div className="image">
								<img src={app.icon} alt={app.title} className="app-icon" />
							</div>
							<div>
								<h3>{app.title}</h3>
								<p>{app.desc}</p>
								<a href={app.link} className="app-link" target="blank">
									View on Google Play
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="explore-more">
					<a
						href="https://play.google.com/store/apps/dev?id=6447182245874050536"
						className="explore-link"
						target="blank"
					>
						Explore more on Google Play →
					</a>
				</div>

				{/* <footer className="footer">
					<p>
						<a href="mailto:contact@utilitysoftlabs.com">
							contact@utilitysoftlabs.com
						</a>
					</p>
					<div className="footer-links">
						<a href="#">Privacy Policy</a>
						<a href="#">Terms</a>
					</div>
				</footer> */}
			</div>
		</section>
	);
};

export default AboutSection;
