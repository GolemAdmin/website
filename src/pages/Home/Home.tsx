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

			<Container sx={{ py: 8 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={4}>
						<FeatureCard>
							<Typography variant="h5" gutterBottom>
								Innovative Tools
							</Typography>
							<Typography variant="body1">
								Cutting-edge Android tools designed to streamline development
								processes and enhance app performance on Google Play.{" "}
							</Typography>
						</FeatureCard>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<FeatureCard>
							<Typography variant="h5" gutterBottom>
								User-Centric Approach
							</Typography>
							<Typography variant="body1">
								Our development process is driven by a deep understanding of
								user behavior and preferences, resulting in intuitive and
								engaging mobile applications.
							</Typography>
						</FeatureCard>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<FeatureCard>
							<Typography variant="h5" gutterBottom>
								Global Reach
							</Typography>
							<Typography variant="body1">
								Our solutions have made a mark on the global stage, garnering
								recognition for their quality, functionality, and impact in the
								mobile app industry.
							</Typography>
						</FeatureCard>
					</Grid>
				</Grid>
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
