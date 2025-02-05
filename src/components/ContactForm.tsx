import React, { useState } from "react";
import {
	Container,
	Paper,
	Box,
	TextField,
	Button,
	Typography,
} from "@mui/material";

const ContactForm: React.FC = () => {
	const [status, setStatus] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		// Замініть URL на свій ідентифікатор з Formspree, якщо необхідно
		const response = await fetch("https://formspree.io/f/xzzdvpgj", {
			method: "POST",
			body: data,
			headers: {
				Accept: "application/json",
			},
		});

		if (response.ok) {
			form.reset();
			setStatus("SUCCESS");
		} else {
			setStatus("ERROR");
		}
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Paper elevation={3} sx={{ p: 4 }}>
				<Box component="form" onSubmit={handleSubmit} noValidate>
					<Typography variant="h5" component="h2" gutterBottom>
						Contact Us
					</Typography>
					<TextField
						type="email"
						name="email"
						label="Your Email"
						required
						fullWidth
						margin="normal"
					/>
					<TextField
						name="message"
						label="Your Message"
						required
						fullWidth
						multiline
						rows={4}
						margin="normal"
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						sx={{ mt: 2 }}
					>
						Send Message
					</Button>
					{status === "SUCCESS" && (
						<Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
							Thank you! Your message has been sent.
						</Typography>
					)}
					{status === "ERROR" && (
						<Typography variant="body1" color="error.main" sx={{ mt: 2 }}>
							Oops! There was an error. Please try again.
						</Typography>
					)}
				</Box>
			</Paper>
		</Container>
	);
};

export default ContactForm;
