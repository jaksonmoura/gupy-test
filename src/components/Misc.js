import styled from "styled-components";

export const Button = styled.a`
	padding: 16px 32px;
	background: ${(props) => (props.primary ? "#27add9" : "var(--dark-blue)")};
	border-radius: 8px;
	color: #fff !important;
`;
