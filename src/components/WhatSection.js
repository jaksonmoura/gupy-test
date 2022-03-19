import React, { useEffect, useState } from "react";
import starimg from "../assets/img/rh/rh_star_color.png";
import * as S from "./WhatSection.style";
import rh_barra from "../assets/img/rh/rh_bar.svg";
import rh_desenvolver from "../assets/img/rh/rh_1.png";
import rh_encantar from "../assets/img/rh/rh_2.png";
import rh_inovar from "../assets/img/rh/rh_3.png";
import rh_atrair from "../assets/img/rh/rh_4.png";
import rh_carrousel_star from "../assets/img/rh/rh_carrousel_star.svg";
import rh_arrow from "../assets/img/arrow.svg";

const WhatSection = () => {
	const [carrouselCurrIndex, setCarrouselCurrIndex] = useState(0);
	const [carrouselSlides, setCarrouselSlides] = useState([
		{ title: "Desenvolver", deg: 0, color: "#FF8D5C" },
		{ title: "Encantar", deg: 90, color: "#FFCF72" },
		{ title: "Inovar", deg: 180, color: "#27ADD9" },
		{ title: "Atrair", deg: 270, color: "#FF607C" },
	]);

	const carrouselCtrlClick = (e, reverse = false) => {
		e.preventDefault();
		let nextIndex;
		if (reverse) {
			nextIndex =
				carrouselCurrIndex === 0
					? carrouselSlides.length - 1
					: carrouselCurrIndex - 1;
		} else {
			nextIndex =
				carrouselCurrIndex + 1 >= carrouselSlides.length
					? 0
					: carrouselCurrIndex + 1;
		}
		setCarrouselCurrIndex(nextIndex);
	};

	const changeCurrIndex = (e, index) => {
		e.preventDefault();
		setCarrouselCurrIndex(index);
	};

	return (
		<S.Section>
			<div className="star">
				<img src={starimg} alt="" id="star_color" />
				<svg
					width="248"
					height="250"
					viewBox="0 0 248 250"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<clipPath id="star">
							<path
								d="M124 0L139.064 39.5679L166.753 7.53842L167.375 49.8723L204.348 29.2444L190.454 69.2382L232.253 62.5L205.518 95.3298L247.101 103.294L210.75 125L247.101 146.706L205.518 154.67L232.253 187.5L190.454 180.762L204.348 220.756L167.375 200.128L166.753 242.462L139.064 210.432L124 250L108.936 210.432L81.2475 242.462L80.625 200.128L43.6516 220.756L57.5456 180.762L15.7468 187.5L42.4817 154.67L0.899033 146.706L37.25 125L0.899033 103.294L42.4817 95.3298L15.7468 62.5L57.5456 69.2382L43.6516 29.2444L80.625 49.8723L81.2475 7.53842L108.936 39.5679L124 0Z"
								fill="white"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>

			<div className="container">
				<div>
					<h2>O que é um RH que inspira?</h2>
					<p>
						Um RH que inspira é aquele que entende que o colaborador
						é a alma do negócio e investe seus recursos e esforços
						para que ele tenha uma experiência incrível na sua
						jornada profissional.
					</p>
				</div>
				<S.Carrousel>
					<div
						className="carrousel-star"
						style={{
							backgroundColor:
								carrouselSlides[carrouselCurrIndex].color,
						}}
					></div>
					<S.CarrouselControls>
						<S.CarrouselArrow
							onClick={(e) => carrouselCtrlClick(e, true)}
							href="#"
						>
							<img src={rh_arrow} alt="Slide anterior" />
						</S.CarrouselArrow>
						<S.CarrouselTitle>
							{carrouselSlides[carrouselCurrIndex].title}
						</S.CarrouselTitle>
						<S.CarrouselArrow
							onClick={(e) => carrouselCtrlClick(e)}
							href="#"
						>
							<img src={rh_arrow} alt="Próximo slide" />
						</S.CarrouselArrow>
					</S.CarrouselControls>

					<S.CarrouselSlides
						style={{
							transform: `rotate(-${carrouselSlides[carrouselCurrIndex].deg}deg)`,
						}}
					>
						<a
							href="#"
							className="slide"
							onClick={(e) => changeCurrIndex(e, 0)}
						>
							<img
								src={rh_desenvolver}
								alt=""
								id="slide-desenvolver"
							/>
						</a>
						<a
							href="#"
							className="slide"
							onClick={(e) => changeCurrIndex(e, 1)}
						>
							<img src={rh_encantar} alt="" id="slide-encantar" />
						</a>
						<a
							href="#"
							className="slide"
							onClick={(e) => changeCurrIndex(e, 2)}
						>
							<img src={rh_inovar} alt="" id="slide-inovar" />
						</a>
						<a
							href="#"
							className="slide"
							onClick={(e) => changeCurrIndex(e, 3)}
						>
							<img src={rh_atrair} alt="" id="slide-atrair" />
						</a>
					</S.CarrouselSlides>
				</S.Carrousel>
			</div>
			<div className="section-bar">
				<img src={rh_barra} alt="" />
			</div>
		</S.Section>
	);
};

export default WhatSection;
