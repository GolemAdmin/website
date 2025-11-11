import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
	return (
		<section className="hero">
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
						<a href="#apps" className="btn primary">
							View Apps
						</a>
						<a href="#contact" className="btn secondary">
							Contact / Support
						</a>
					</div>
				</div>

				<div className="hero-mockup">
					<div className="phone-frame">
						<div className="phone-screen">
							<div className="phone-placeholder" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
