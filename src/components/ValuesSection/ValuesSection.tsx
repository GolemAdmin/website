import React from "react";
import "./ValuesSection.css";

const ValuesSection: React.FC = () => {
	const values = [
		{
			title: "Innovative Tools",
			desc: "Cutting-edge Android tools designed to streamline development processes and enhance app performance on Google Play.",
		},
		{
			title: "User-Centric Approach",
			desc: "Our development process is driven by a deep understanding of user behavior and preferences, resulting in intuitive and engaging mobile applications.",
		},
		{
			title: "Global Reach",
			desc: "Our solutions have made a mark on the global stage, garnering recognition for their quality, functionality, and impact in the mobile app industry.",
		},
	];

	return (
		<section className="values-section">
			<div className="values-header">
				<h2>Why Choose UtilitySoft Labs</h2>
				<p>
					At UtilitySoft Labs, we believe technology should simplify life, not
					complicate it. That’s why our mission is to craft powerful,
					privacy-friendly Android tools that combine sleek design, solid
					performance, and genuine usefulness.
				</p>
			</div>

			<div className="values-container">
				{values.map((item) => (
					<div key={item.title} className="value-card">
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ValuesSection;
