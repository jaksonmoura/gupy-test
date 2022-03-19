import styled from "styled-components";
import { SectionDefault } from "./Misc.style";

export const Section = styled(SectionDefault)`
	h2 {
		text-align: center;
	}
`;

export const Categories = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	gap: 1rem;
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

	&:hover {
		opacity: 0.9;
	}
`;
