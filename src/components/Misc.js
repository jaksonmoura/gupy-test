import styled from "styled-components";

export const Button = styled.a`
	padding: 18px 32px;
	background: ${(props) => (props.primary ? "#27add9" : "var(--darkBlue)")};
	border-radius: 8px;
	color: #fff !important;
	width: 368px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 52px;
`;

export const SectionDefault = styled.section`
	position: relative;
	width: 100%;
	/* height: 520px; */
	padding: 64px 0;
	display: inline-flex;
	justify-content: center;
`;
