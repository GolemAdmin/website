import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			{/*<div className="footer-container">
			
				 <div className="footer-section footer-brand">
					<h3>UtilitySoft Labs</h3>
					<p>Smart Android tools crafted with simplicity and precision.</p>
				</div>

				
				<div className="footer-section footer-links">
					<h4>Explore</h4>
					<ul className="footer-links-list">
						<li>
							<a href="#apps">Our Apps</a>
						</li>
						<li>
							<a href="#about">About Us</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Terms of Service</a>
						</li>
					</ul>
				</div>

			
				<div className="footer-section footer-social">
					<h4>Connect</h4>
					<div className="social-icons">
						<a href="#" aria-label="Facebook">
							<Facebook size={20} />
						</a>
						<a href="#" aria-label="Twitter">
							<Twitter size={20} />
						</a>
						<a href="#" aria-label="LinkedIn">
							<Linkedin size={20} />
						</a>
						<a href="#" aria-label="Instagram">
							<Instagram size={20} />
						</a>
						<a href="mailto:contact@utilitysoftlabs.com" aria-label="Email">
							<Mail size={20} />
						</a>
					</div>
				</div>
			</div> */}

			<div className="footer-bottom">
				<p>
					© {new Date().getFullYear()} UtilitySoft Labs. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
