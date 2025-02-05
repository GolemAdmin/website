import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Button,
	Box,
	Grid,
	Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import ContactForm from "./../../components/ContactForm";

const HeroSection = styled(Box)({
	height: "80vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	background: "linear-gradient(135deg, #3a8ef6, #5a48f6)",
	color: "#fff",
	padding: "2rem",
});

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

const AboutSection = styled(Box)({
	padding: "4rem 2rem",
	textAlign: "center",
	backgroundColor: "#f9f9f9",
});

const Home: React.FC = () => {
	return (
		<>
			<AppBar position="sticky" color="primary">
				<Toolbar>
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						GolemApps
					</Typography>
				</Toolbar>
			</AppBar>

			<HeroSection>
				<Typography variant="h2" gutterBottom>
					Empowering Excellence in Software Android Development
				</Typography>
				<Typography variant="h5" gutterBottom>
					Crafting Innovative Solutions for Google Play
				</Typography>
				<Typography variant="body1" maxWidth="md" gutterBottom>
					At GolemApps, we specialize in cutting-edge software development and
					Android tools tailored for Google Play. Our focus is on empowering
					excellence through innovative solutions that resonate with users
					worldwide.
				</Typography>
			</HeroSection>

			<AboutSection>
				<Typography variant="h4" gutterBottom>
					GolemApps
				</Typography>
				<Typography variant="h5" gutterBottom>
					Innovative Solutions for Mobile App Development
				</Typography>
				<Typography variant="body1" maxWidth="md" margin="auto">
					GolemApps is a leading provider of software Android development
					services and tools for Google Play. With a passion for innovation, we
					deliver exceptional mobile applications that redefine user experiences
					and drive business success.
					<br />
					At GolemApps, we are committed to excellence, creativity, and quality
					in every project we undertake.
				</Typography>
			</AboutSection>

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
					&copy; {new Date().getFullYear()} GolemApps. All rights reserved.
				</Typography>
			</Box>
		</>
	);
};

export default Home;
