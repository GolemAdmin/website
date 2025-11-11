import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Box,
	Grid,
	Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import ContactForm from "./../../components/ContactForm";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";

const FeatureCard = styled(Paper)({
	padding: "1.5rem",
	textAlign: "center",
	boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
	transition: "transform 0.3s",
	"&:hover": {
		transform: "scale(1.05)",
	},
	minHeight: "140px",
});

const Home: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>UtilitySoft Labs</title>
				<meta name="description" content="UtilitySoft Labs" />
			</Helmet>
			<HeroSection />

			<AboutSection />
			<ValuesSection />

			<Container sx={{ py: 8 }}>
				<ContactForm />
			</Container>

			<Box textAlign="center" py={4} bgcolor="#f4f4f4">
				<Typography variant="body1">
					&copy; {new Date().getFullYear()} UtilitySoft Labs. All rights
					reserved.
				</Typography>
			</Box>
		</>
	);
};

export default Home;
