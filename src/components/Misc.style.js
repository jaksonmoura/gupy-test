import styled from "styled-components";

export const Button = styled.a`
	padding: 18px 32px;
	background: ${(props) => (props.primary ? "#27add9" : "var(--darkBlue)")};
	border-radius: 8px;
	color: #fff !important;
	width: 100%;
	max-width: 368px;
	display: inline-flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 52px;
	max-height: 52px;
	transition: 0.3s ease-in-out;

	@media screen and (max-width: 368px) {
		width: 100%;
	}

	&:hover {
		background: ${(props) =>
			props.primary ? "#27add9" : "var(--darkerBlue)"};
	}
`;

export const SectionDefault = styled.section`
	position: relative;
	width: 100%;
	/* height: 520px; */
	padding: 64px 32px;
	display: inline-flex;
	justify-content: center;
`;

export const GriddedSection = styled(SectionDefault)`
	padding: ${(props) => (props.reverse ? "32px 0 125px 0" : "64px 0 0 0")};
	.container {
		position: relative;
		padding: 46px 32px;

		text-align: center;
		&:before {
			content: "";
			position: absolute;
			width: 120vw;
			height: 100%;
			transition: transform 0.5s ease-in-out;
			transform: ${(props) =>
				props.reverse ? "translateX(100%)" : "translateX(-100%)"};
			top: 0;
			${(props) => (props.reverse ? "left: -20px" : "right: -20px")};
			background: #ffcf72;
			z-index: -1;
			border-radius: ${(props) =>
				props.reverse ? "400px 0 0 400px" : "0 400px 400px 0"};

			@media screen and (max-width: 992px) {
				left: -5vw !important;
				border-radius: ${(props) =>
					props.reverse ? "400px 0 0 400px" : "0"};
			}
		}
	}

	h2 {
		margin-bottom: 32px;
	}

	h2,
	h2 + div,
	a {
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.6s ease-in-out;
		transition-delay: 0.2s;
	}

	&.show {
		h2,
		h2 + div,
		a {
			opacity: 1;
			pointer-events: all;
		}
		.container:before {
			transform: translateX(0);
		}
	}

	@media screen and (max-width: 1100px) {
		padding: ${(props) => (props.reverse ? "32px 0 64px 0" : "64px 0 0 0")};
	}
`;

export const Grid3Columns = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;
	margin-bottom: 50px;
	scroll-behavior: smooth;
	position: relative;

	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(3, 100%);
		overflow-x: scroll;
		overflow-y: hidden;
		justify-items: center;
		scroll-snap-type: x mandatory;
		gap: 3rem;
		margin-bottom: 32px;

		&#grid-timeline:before {
			opacity: 0;
		}
	}

	&.show {
		&#grid-timeline:before {
			max-width: 100%;
		}
	}

	&#grid-timeline:before {
		position: absolute;
		content: "";
		top: 40px;
		left: 170px;
		width: calc(100% - 350px);
		max-width: 0;
		height: 5px;
		background: var(--darkBlue);
		z-index: 0;
		transition: all 0.5s ease-in-out;
		transition-delay: 0.5s;
	}
`;

export const GridItem = styled.div`
	display: grid;
	grid-template-rows: ${(props) =>
		props.compact ? "87px auto" : "120px auto auto"};
	gap: 8px;
	text-align: center;
	justify-items: center;
	align-content: flex-start;
	max-width: 400px;
	position: relative;
	@media screen and (max-width: 992px) {
		scroll-snap-align: center;
	}
	p,
	h3 {
		margin: 0;
	}

	/* ${(props) => !props.compact} {
		&:before {
			position: absolute;
			content: "";
			top: 0;
			left: 50%;
			width: 100%;
			height: 5px;
			background: red;
			z-index: 1;
		}
	} */
`;

export const GridScrollMobile = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 30px);
	justify-content: center;

	opacity: 0;
	visibility: hidden;
	pointer-events: none;

	@media screen and (max-width: 992px) {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
		margin-bottom: 32px;
	}

	a {
		height: 12px;
		width: 12px;
		gap: 12px;
		background: #fff;
		border-radius: 12px;

		&.current {
			background: #888888;
		}
	}
`;
