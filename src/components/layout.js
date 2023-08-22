import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, footerBoxes, footerBoxes2 }) {
	return (
		<>
			<Header />
			{children}
			<Footer FooterBoxes={footerBoxes} FooterBoxes2={footerBoxes2} />
		</>
	);
}
