import styled from "styled-components";
import { SectionDefault } from "./Misc.style";

export const Section = styled(SectionDefault)`
	h2 {
		text-align: center;
		margin-bottom: 64px;
	}

	@media screen and (max-width: 1100px) {
		h2 {
			margin-bottom: 32px;
		}
	}
`;

export const Categories = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
`;

export const Category = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.background};
	font-family: "Libre Baskerville", serif;
	font-weight: 700;
	font-size: 2.13rem;
	height: 144px;
	color: #fff;
	width: 100%;
	max-width: 270px;

	&:hover {
		opacity: 0.9;
	}
`;
