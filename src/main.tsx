import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";

// Battery Health And Alarm
import BatteryPrivacyPolicy from "./pages/BatteryHealthAndAlarm/PrivacyPolicy";
import BatteryTerms from "./pages/BatteryHealthAndAlarm/Terms";

// Recover Deleted Messages
import RecoverPrivacyPolicy from "./pages/RecoverDeletedMessages/PrivacyPolicy";
import RecoverTerms from "./pages/RecoverDeletedMessages/Terms";

// Screenshot Pro
import ScreenshotPrivacyPolicy from "./pages/ScreenshotPro/PrivacyPolicy";
import ScreenshotTerms from "./pages/ScreenshotPro/Terms";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					{/* Battery Health And Alarm */}
					<Route
						path="/battery-health-and-alarm/privacy-policy"
						element={<BatteryPrivacyPolicy />}
					/>
					<Route
						path="/battery-health-and-alarm/terms"
						element={<BatteryTerms />}
					/>

					{/* Recover Deleted Messages */}
					<Route
						path="/recover-deleted-messages/privacy-policy"
						element={<RecoverPrivacyPolicy />}
					/>
					<Route
						path="/recover-deleted-messages/terms"
						element={<RecoverTerms />}
					/>

					{/* Screenshot Pro */}
					<Route
						path="/screenshot-pro-capture-edit/privacy-policy"
						element={<ScreenshotPrivacyPolicy />}
					/>
					<Route
						path="/screenshot-pro-capture-edit/terms"
						element={<ScreenshotTerms />}
					/>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
