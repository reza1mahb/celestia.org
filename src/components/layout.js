import React from "react";
import Header from "./header";
import Footer from "./footer";
import {useEffect} from "react";

export default function Layout({ children, footerBoxes, footerBoxes2 }) {

	useEffect(() => {
		const elements = document.querySelectorAll("[class^=plausible-event-name]")

		if(window.plausible) {
			elements.forEach(function (element) {
				element.addEventListener("click", function (e) {
					window.plausible(element.classList[0].substring(element.classList[0].indexOf('=') + 1))
				}, false);
			})
		}
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer FooterBoxes={footerBoxes} FooterBoxes2={footerBoxes2} />
		</>
	);
}
