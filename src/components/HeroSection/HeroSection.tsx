import React from "react";
import "./HeroSection.css";
import utilitysoft_labs_icon from "/utilitysoft_labs_icon.png";
import PhoneScanAnimation from "../../components/PhoneScanAnimation/PhoneScanAnimation";

const HeroSection: React.FC = () => {
	return (
		<section className="hero">
			{/* Верхній лівий логотип */}
			<div className="hero-brand">
				<img
					src={utilitysoft_labs_icon}
					alt="UtilitySoft Labs logo"
					className="brand-logo"
				/>
				<h2>UtilitySoft Labs</h2>
			</div>

			<div className="hero-container">
				<div className="hero-text">
					<h1>
						Smart Android Tools.
						<br />
						Crafted by <span>UtilitySoft Labs</span>
					</h1>

					<p>
						We build lightweight, powerful, and privacy-focused apps that
						simplify your digital life.
					</p>

					<div className="hero-buttons">
						<a
							href="#apps"
							className="btn primary"
							onClick={(e) => {
								e.preventDefault();
								document
									.querySelector("#apps")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							View Apps
						</a>

						<a
							href="#contact"
							className="btn secondary"
							onClick={(e) => {
								e.preventDefault();
								document
									.querySelector("#contact")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Contact / Support
						</a>
					</div>
				</div>

				{/* Телефон — лише на десктопах */}
				<div className="hero-phone">
					<PhoneScanAnimation />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
