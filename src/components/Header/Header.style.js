import styled from "styled-components";

export const Header = styled.header`
	height: 85px;
	width: 100%;
	border-bottom: 1px solid #e5e5e5;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	.container {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		height: 100%;
		color: #888888;
	}

	nav ul {
		display: inline-flex;
		gap: 32px;
		font-size: 13px;

		li {
		}
	}
`;
