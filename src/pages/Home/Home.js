import React from "react";
import CategoriesSection from "../../components/CategoriesSection";
import HeroSection from "../../components/HeroSection";
import TimelineSection from "../../components/TimelineSection";
import WhatSection from "../../components/WhatSection";
import WhySection from "../../components/WhySection";

const Home = () => {
	window.addEventListener("scroll", (e) => {
		const winHeight = window.innerHeight;
		const sectionToAnimate = document.querySelectorAll(".scroll-animation");
		// if (window.innerWidth <= 992 || sectionToAnimate.length === 0) return;

		let pageOffset = window.scrollY;

		sectionToAnimate.forEach((section) => {
			if (pageOffset > section.offsetTop - winHeight / 2) {
				section.classList.add("show");
				section.querySelectorAll(".enlarge-animation").forEach((el) => {
					el.classList.add("show");
				});
			}
		});
	});

	return (
		<>
			<HeroSection />
			<WhySection />
			<TimelineSection />
			<WhatSection />
			<CategoriesSection />
		</>
	);
};

export default Home;
