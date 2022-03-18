import React from "react";
import HeroSection from "../../components/HeroSection";
import TimelineSection from "../../components/TimelineSection";
import WhySection from "../../components/WhySection";

const Home = () => {
	window.addEventListener("scroll", (e) => {
		const sectionToAnimate = document.querySelectorAll(".scroll-animation");
		// if (window.innerWidth <= 992 || sectionToAnimate.length === 0) return;

		const winHeight = window.innerHeight;
		let pageOffset = window.scrollY;

		sectionToAnimate.forEach((section) => {
			if (pageOffset > section.offsetTop - winHeight / 2) {
				section.classList.add("show");
			}
		});
	});

	return (
		<>
			<HeroSection />
			<WhySection />
			<TimelineSection />
		</>
	);
};

export default Home;
