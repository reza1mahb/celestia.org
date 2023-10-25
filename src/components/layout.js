import React, {useEffect, useState} from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, footerBoxes, footerBoxes2 }) {

	const [loaded,setLoaded] = useState(false)

	useEffect(() => {
		if (typeof window !== `undefined` && loaded) {
			const elements = document.querySelectorAll("[class*=plausible-event-name]")

			elements.forEach(function (element) {
				element.addEventListener("click", function (e) {
					console.log('ADD EVENT: ' + element.classList[0].substring(element.classList[0].indexOf('=') + 1))
					window.plausible(element.classList[0].substring(element.classList[0].indexOf('=') + 1))
				}, false);
			})
		}
	});

	useEffect(() => {
		setLoaded(true)
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer FooterBoxes={footerBoxes} FooterBoxes2={footerBoxes2} />
		</>
	);
}
