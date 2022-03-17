import styled from "styled-components";

export const Button = styled.a`
	padding: 18px 32px;
	background: ${(props) => (props.primary ? "#27add9" : "var(--darkBlue)")};
	border-radius: 8px;
	color: #fff !important;
	width: 368px;
	display: inline-flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 52px;
	max-height: 52px;
	transition: 0.3s ease-in-out;

	&:hover {
		background: ${(props) =>
			props.primary ? "#27add9" : "var(--darkerBlue)"};
	}
`;

export const SectionDefault = styled.section`
	position: relative;
	width: 100%;
	/* height: 520px; */
	padding: 64px 0;
	display: inline-flex;
	justify-content: center;
`;

export const GriddedSection = styled(SectionDefault)`
	padding: ${(props) => (props.reverse ? "32px 0 125px 0" : "64px 0 0 0")};
	.container {
		position: relative;
		padding: 46px 0;

		text-align: center;
		&:before {
			content: "";
			position: absolute;
			width: 100vw;
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
`;

export const Grid3Columns = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;
	margin-bottom: 50px;

	@media screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		justify-items: center;
		gap: 3rem;
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
	p,
	h3 {
		margin: 0;
	}
`;
