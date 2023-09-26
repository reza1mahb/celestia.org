import React from "react";
import Header from "./header";
import Footer from "./footer";
import Banner from "./modules/banner";

export default function Layout({ children, footerBoxes, footerBoxes2 }) {
	return (
		<>
			<Banner/>
			<Header />
			{children}
			<Footer FooterBoxes={footerBoxes} FooterBoxes2={footerBoxes2} />
		</>
	);
}
