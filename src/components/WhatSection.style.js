import styled from "styled-components";
import { SectionDefault } from "./Misc.style";

export const Section = styled(SectionDefault)`
	background: #fffaf0;
	position: relative;
	padding: 95px;
	height: 475px;

	.star {
		animation: rotate 30s linear infinite;
		transform-origin: 50% 50%;
		will-change: transform;
		width: 250px;
		height: 250px;
		position: absolute;
		top: -125px;
		left: -70px;
		z-index: 0;
		#star_color {
			clip-path: url(#star);
		}

		svg path {
			will-change: transform;
			animation: rotate 15s linear infinite reverse;
			transform-origin: 50% 50%;
		}
	}

	.container {
		display: grid;
		grid-template-columns: 360px auto;
		gap: 120px;
		z-index: 1;
		padding-left: 64px;
	}

	.section-bar {
		position: absolute;
		bottom: 0;
		height: 26px;
		width: 100%;
		left: 0;
		z-index: 0;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.carrousel-star {
		position: absolute;
		bottom: 125px;
		left: 210px;
		width: 105px;
		height: 105px;
		transition: all 0.5s ease-in-out;
		z-index: 1;

		mask: url(rh_carrousel_star.svg) no-repeat center / cover;
	}

	@media screen and (max-width: 1100px) {
		height: auto;
		padding: 95px 32px;
		.container {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
			gap: 16px;
			text-align: center;
		}

		.carrousel-star {
			left: 55%;
			bottom: 48px;
		}

		.star {
			left: -90px;
			img {
				transform: scale(0.5);
			}
		}
	}

	@media screen and (max-width: 600px) {
		.carrousel-star {
			width: 52px;
			height: 52px;
		}
	}
`;

export const Carrousel = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 32px;
	margin-top: -150px;
	position: relative;
	transition: 0.3s ease-in-out;
	@media screen and (max-width: 1100px) {
		margin-top: 0;
		flex-direction: column-reverse;
	}
`;

export const CarrouselControls = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	width: 176px;

	@media screen and (max-width: 1100px) {
		width: fit-content;
		flex-direction: row;
	}
`;

export const CarrouselArrow = styled.a`
	&:last-of-type {
		transform: rotate(180deg);
	}

	@media screen and (max-width: 1100px) {
		&:first-of-type {
			transform: rotate(-90deg);
		}

		&:last-of-type {
			transform: rotate(90deg);
		}
	}
`;

export const CarrouselSlides = styled.div`
	display: grid;
	transition: 0.5s ease-in-out;
	grid-template-areas:
		"rh2 ."
		"rh1 rh3"
		"rh4 .";

	a.slide {
		align-self: center;
		justify-self: center;
		&:nth-of-type(1) {
			grid-area: rh1;
			/* margin-right: -100px; */
			margin-top: -11px;
		}
		&:nth-of-type(2) {
			grid-area: rh2;
			margin-bottom: -102px;
			/* margin-right: -11px; */
			margin-right: calc(-100% - 10px);
		}
		&:nth-of-type(3) {
			grid-area: rh3;
			/* margin-left: -100px; */
			margin-bottom: -11px;
		}
		&:nth-of-type(4) {
			grid-area: rh4;
			margin-top: -102px;
			/* margin-left: -11px; */
			margin-left: calc(100% - 10px);
		}
	}

	@media screen and (max-width: 1100px) {
		a.slide {
			&:nth-of-type(1) img,
			&:nth-of-type(3) img {
				width: 40vw;
				max-width: 300px;
			}
			&:nth-of-type(2) img,
			&:nth-of-type(4) img {
				height: 40vw;
				max-height: 300px;
			}
			&:nth-of-type(1) {
				margin-right: 0;
				margin-top: -10px;
			}
			&:nth-of-type(2) {
				margin-bottom: calc(-40% + 10px);
				margin-right: calc(-100% - 11px);
			}
			&:nth-of-type(3) {
				margin-left: 0;
				margin-bottom: -11px;
			}
			&:nth-of-type(4) {
				margin-top: calc(-40% + 10px);
				margin-left: calc(100% - 11px);
			}
		}
	}

	@media screen and (max-width: 600px) {
		a.slide {
			&:nth-of-type(1) img,
			&:nth-of-type(3) img {
				width: calc(50vw - 74px);
			}
			&:nth-of-type(2) img,
			&:nth-of-type(4) img {
				height: calc(50vw - 74px);
			}
			&:nth-of-type(1) {
				margin-right: 0;
				margin-top: 0;
			}
			&:nth-of-type(2) {
				margin-bottom: -40%;
				margin-right: calc(-100% - 5px);
			}
			&:nth-of-type(3) {
				margin-left: 0;
				margin-bottom: -11px;
			}
			&:nth-of-type(4) {
				margin-top: calc(-40% + 5px);
				margin-left: calc(100% - 5px);
			}
		}
	}
`;

export const CarrouselTitle = styled.span`
	font-weight: 700;
	font-family: "Libre Baskerville", serif;
	font-size: 1.6rem;
	width: 125px;
	text-align: center;

	@media screen and (max-width: 1100px) {
		width: 150px;
	}
`;
