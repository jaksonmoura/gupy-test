import styled from "styled-components";
import herobg1 from "../assets/hero_bg1.svg";
import herobg2 from "../assets/hero_bg2.svg";
import heroanimate1 from "../assets/hero_animate1.svg";
import heroanimate2 from "../assets/hero_animate2.svg";
import { SectionDefault } from "./Misc";

export const Section = styled(SectionDefault)`
	background: #fff6e5;
	.container {
		text-align: center;
		display: inline-flex;
		justify-content: center;
		position: relative;
	}
	.hero-wrapper {
		width: 560px;
	}

	&:before,
	&:after {
		content: "";
		position: absolute;
		z-index: 1;
		background-size: contain !important;
	}
	&:before {
		content: "";
		position: absolute;
		bottom: 64px;
		height: 140px;
		width: 600px;
		left: -300px;
		background: url(${herobg2}) no-repeat;
	}

	&:after {
		content: "";
		position: absolute;
		top: 70px;
		height: 330px;
		width: 500px;
		right: -200px;
		background: url(${herobg1}) right center no-repeat;
	}

	.data-inscricao {
		font-size: 1.46rem;
		margin: 32px 0 40px 0;
		font-family: "Libre Baskerville", serif;
		font-weight: 500;
	}

	.animate {
	}

	.circle,
	.asterisk {
		position: absolute;
		width: 110px;
		height: 110px;
		z-index: 2;
		background-size: contain !important;
	}

	.circle {
		top: -20px;
		right: 0px;
		background: url(${heroanimate1});
	}

	.asterisk {
		bottom: -44px;
		left: 0px;
		background: url(${heroanimate2});
	}
`;
