import React from "react";
import "./GolemAppsLanding.css";

const apps = [
	{
		name: "QR Scanner & Barcode Reader",
		desc: "Scan and generate any QR or barcode instantly — fast, private, and ad-free.",
		icon: "placeholder_icon.png",
		link: "#",
	},
	{
		name: "Battery Life Monitor and Alarm",
		desc: "Monitor your phone's battery health, temperature, and get smart charge alerts.",
		icon: "placeholder_icon.png",
		link: "#",
	},
	{
		name: "Cards - Mobile Wallet",
		desc: "Store loyalty, ID, and membership cards securely — your digital wallet made simple.",
		icon: "placeholder_icon.png",
		link: "#",
	},
	{
		name: "Screenshot & Image Editor",
		desc: "Capture, edit, and enhance screenshots quickly with an intuitive interface.",
		icon: "placeholder_icon.png",
		link: "#",
	},
	{
		name: "WAMR: Reveal Deleted Messages",
		desc: "Recover deleted messages and media safely with full notification support.",
		icon: "placeholder_icon.png",
		link: "#",
	},
];

function GolemAppsLanding() {
	return (
		<>
			<header className="header">
				<h1>UtilitySoft Labs</h1>
				<p>
					Smart Android tools crafted with simplicity, precision, and utility in
					mind.
				</p>
			</header>

			<section className="section about">
				<h2>About Us</h2>
				<p>
					UtilitySoft Labs is an independent Android studio focused on building
					smart, privacy-friendly apps that make your daily life easier. Our
					mission is to create lightweight, powerful utilities that just work.
				</p>
			</section>

			<section className="section apps">
				<h2>Our Apps</h2>
				<div className="apps-grid">
					{apps.map((app) => (
						<div key={app.name} className="card">
							<img src={app.icon} alt={app.name} />
							<h3>{app.name}</h3>
							<p>{app.desc}</p>
							<a className="btn" href={app.link}>
								View on Google Play
							</a>
						</div>
					))}
				</div>
			</section>

			<footer>
				<p>© 2025 UtilitySoft Labs. All rights reserved.</p>
				<p>contact@utilitysoftlabs.com</p>
			</footer>
		</>
	);
}

export default GolemAppsLanding;
