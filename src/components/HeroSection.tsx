import React from "react";
import { Box, Typography, Button, styled, Container } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// === Styled Components ===
const HeroWrapper = styled(Box)(({ theme }) => ({
	position: "relative",
	overflow: "hidden",
	background: "linear-gradient(135deg, #0066FF 0%, #00C8A1 100%)",
	color: "#fff",
	paddingTop: theme.spacing(16),
	paddingBottom: theme.spacing(16),
	textAlign: "center",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	fontFamily: "'Poppins', sans-serif",
	[theme.breakpoints.down("sm")]: {
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(10),
	},
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 800,
	letterSpacing: "0.5px",
	maxWidth: 900,
	margin: "0 auto",
	lineHeight: 1.2,
	fontFamily: "'Poppins', sans-serif",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.2rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "3.4rem",
	},
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	fontWeight: 400,
	opacity: 0.9,
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(4),
	fontFamily: "'Poppins', sans-serif",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.1rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.5rem",
	},
}));

const HeroText = styled(Typography)(({ theme }) => ({
	maxWidth: 700,
	margin: "0 auto",
	lineHeight: 1.6,
	opacity: 0.9,
	fontSize: "1.1rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

const CTAWrapper = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(6),
	display: "flex",
	justifyContent: "center",
	gap: theme.spacing(2),
	flexWrap: "wrap",
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
	backgroundColor: "#fff",
	color: "#0066FF",
	fontWeight: 700,
	borderRadius: "50px",
	padding: theme.spacing(1.5, 4),
	textTransform: "none",
	fontSize: "1rem",
	transition: "all 0.3s ease",
	"&:hover": {
		backgroundColor: "#f5f5f5",
		transform: "translateY(-2px)",
	},
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
	borderColor: "#fff",
	color: "#fff",
	fontWeight: 700,
	borderRadius: "50px",
	padding: theme.spacing(1.5, 4),
	textTransform: "none",
	fontSize: "1rem",
	transition: "all 0.3s ease",
	"&:hover": {
		backgroundColor: "rgba(255,255,255,0.15)",
		transform: "translateY(-2px)",
	},
}));

// === Component ===
export default function HeroSection() {
	return (
		<HeroWrapper>
			<Container>
				<HeroTitle variant="h2">
					Empowering Excellence in Software Android Development
				</HeroTitle>

				<HeroSubtitle variant="h5">
					Crafting Innovative Solutions for Google Play
				</HeroSubtitle>

				<HeroText variant="body1">
					At UtilitySoft Labs, we specialize in cutting-edge software
					development and Android tools tailored for Google Play. Our focus is
					on empowering excellence through innovative solutions that resonate
					with users worldwide.
				</HeroText>

				<CTAWrapper>
					<PrimaryButton href="#apps">Explore Our Apps</PrimaryButton>
					<SecondaryButton
						variant="outlined"
						href="https://play.google.com/store/apps/dev?id=UtilitySoftLabs"
						target="_blank"
						rel="noopener noreferrer"
						endIcon={<OpenInNewIcon />}
					>
						View on Google Play
					</SecondaryButton>
				</CTAWrapper>
			</Container>
		</HeroWrapper>
	);
}
