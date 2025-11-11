import React from "react";
import {
	Container,
	Typography,
	Box,
	Button,
	styled,
	ButtonProps,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Theme } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// === About section ===
const AboutApps = styled(Box)(({ theme }) => ({
	textAlign: "center",
	marginBottom: theme.spacing(6),
	[theme.breakpoints.down("sm")]: {
		marginBottom: theme.spacing(4),
	},
}));

// === Feature cards ===
const FeatureCard = styled("div")(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius * 2,
	boxShadow: theme.shadows[3],
	padding: theme.spacing(4),
	display: "flex",
	flexDirection: "column",
	transition: "all 0.25s ease-in-out",
	"&:hover": {
		boxShadow: theme.shadows[6],
		transform: "translateY(-4px)",
	},
}));

// === PlayButton (типізований для <a>) ===
type PlayButtonProps = ButtonProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

const PlayButton = styled((props: PlayButtonProps) => <Button {...props} />)(
	({ theme }) => ({
		alignSelf: "flex-start",
		marginTop: theme.spacing(2),
		fontWeight: 600,
		textTransform: "none",
		borderRadius: theme.shape.borderRadius * 1.5,
		paddingLeft: theme.spacing(2.5),
		paddingRight: theme.spacing(2.5),
		"& .MuiSvgIcon-root": {
			fontSize: "1.1rem",
			marginLeft: theme.spacing(1),
		},
	})
);

// === Component ===
export default function AppsSection() {
	return (
		<Container sx={{ py: { xs: 6, md: 10 } }}>
			<AboutApps>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
					fontWeight={700}
					letterSpacing={0.3}
				>
					Android tools for productivity, screenshot, wallet & battery
					monitoring
				</Typography>
				<Typography
					variant="h6"
					color="text.secondary"
					sx={{ maxWidth: 800, mx: "auto" }}
				>
					Smart, elegant, and powerful Android tools — designed by UtilitySoft
					Labs to make everyday digital tasks effortless. <br /> Explore our
					most popular apps below:
				</Typography>
			</AboutApps>

			<Grid2 container spacing={4} alignItems="stretch">
				{/* === QR Scanner === */}
				<Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
					<FeatureCard>
						<Box sx={{ flexGrow: 1 }}>
							<Typography variant="h6" gutterBottom fontWeight={600}>
								QR Scanner & Barcode Reader
							</Typography>
							<Typography variant="body1" color="text.secondary">
								Fast, safe, and easy-to-use scanner for QR codes and barcodes.
								Supports history, flashlight, and smart actions for links.
							</Typography>
						</Box>
						<PlayButton
							component="a"
							href="https://play.google.com/store/apps/details?id=com.golemapps.qrscanner"
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							color="primary"
							endIcon={<OpenInNewIcon />}
						>
							View on Google Play
						</PlayButton>
					</FeatureCard>
				</Grid2>

				{/* === Battery Life Monitor === */}
				<Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
					<FeatureCard>
						<Box sx={{ flexGrow: 1 }}>
							<Typography variant="h6" gutterBottom fontWeight={600}>
								Battery Life Monitor and Alarm
							</Typography>
							<Typography variant="body1" color="text.secondary">
								Keep your battery healthy and your phone protected. Monitor
								charging, temperature, and battery life — get smart alerts
								before it's too late.
							</Typography>
						</Box>
						<PlayButton
							component="a"
							href="https://play.google.com/store/apps/details?id=com.utilitysoft.batteryhealth"
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							color="primary"
							endIcon={<OpenInNewIcon />}
						>
							View on Google Play
						</PlayButton>
					</FeatureCard>
				</Grid2>

				{/* === Cards – Mobile Wallet === */}
				<Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
					<FeatureCard>
						<Box sx={{ flexGrow: 1 }}>
							<Typography variant="h6" gutterBottom fontWeight={600}>
								Cards – Mobile Wallet
							</Typography>
							<Typography variant="body1" color="text.secondary">
								A secure and convenient way to store loyalty, club, and
								membership cards digitally. Lightweight, privacy-focused, and
								beautifully designed.
							</Typography>
						</Box>
						<PlayButton
							component="a"
							href="https://play.google.com/store/apps/details?id=com.utilitysoft.cardswallet"
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							color="primary"
							endIcon={<OpenInNewIcon />}
						>
							View on Google Play
						</PlayButton>
					</FeatureCard>
				</Grid2>

				{/* === Screenshot & Image Editor === */}
				<Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
					<FeatureCard>
						<Box sx={{ flexGrow: 1 }}>
							<Typography variant="h6" gutterBottom fontWeight={600}>
								Screenshot & Image Editor
							</Typography>
							<Typography variant="body1" color="text.secondary">
								Capture, crop, and annotate screenshots with professional tools.
								Perfect for productivity, feedback, or visual sharing.
							</Typography>
						</Box>
						<PlayButton
							component="a"
							href="https://play.google.com/store/apps/details?id=com.golemapps.screenshotlite"
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							color="primary"
							endIcon={<OpenInNewIcon />}
						>
							View on Google Play
						</PlayButton>
					</FeatureCard>
				</Grid2>

				{/* === WAMR === */}
				<Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
					<FeatureCard>
						<Box sx={{ flexGrow: 1 }}>
							<Typography variant="h6" gutterBottom fontWeight={600}>
								WAMR: Reveal Deleted Messages
							</Typography>
							<Typography variant="body1" color="text.secondary">
								Recover deleted messages and media instantly. Never miss what
								your friends sent — even after they delete it.
							</Typography>
						</Box>
						<PlayButton
							component="a"
							href="https://play.google.com/store/apps/details?id=com.utilitysoft.wamr"
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							color="primary"
							endIcon={<OpenInNewIcon />}
						>
							View on Google Play
						</PlayButton>
					</FeatureCard>
				</Grid2>
			</Grid2>
		</Container>
	);
}
