import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

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
			<ContactSection />

			<Footer />

			{/* <Box textAlign="center" py={4} bgcolor="#f4f4f4">
				<Typography variant="body1">
					&copy; {new Date().getFullYear()} UtilitySoft Labs. All rights
					reserved.
				</Typography>
			</Box> */}
		</>
	);
};

export default Home;
