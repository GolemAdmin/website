import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
	const [status, setStatus] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);

		const response = await fetch("https://formspree.io/f/xzzdvpgj", {
			method: "POST",
			body: data,
			headers: { Accept: "application/json" },
		});

		if (response.ok) {
			form.reset();
			setStatus("SUCCESS");
		} else {
			setStatus("ERROR");
		}
	};

	return (
		<section id="contact" className="contact-section">
			<div className="contact-container">
				<div className="contact-header">
					<h2>Get in Touch</h2>
					<p>
						Have a question, partnership idea, or feedback? We’d love to hear
						from you — drop us a message below.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="contact-form">
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
						className="contact-input"
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						rows={5}
						required
						className="contact-textarea"
					/>
					<button type="submit" className="contact-button">
						Send Message
					</button>

					{status === "SUCCESS" && (
						<p className="contact-success">
							✅ Thank you! Your message has been sent.
						</p>
					)}
					{status === "ERROR" && (
						<p className="contact-error">
							❌ Something went wrong. Please try again.
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
