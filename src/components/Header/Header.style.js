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
		display: inline-block;
		color: #888888;
	}

	nav ul {
		display: inline-flex;
		align-items: center;
		gap: 32px;
		font-size: 13px;

		li {
			height: 52px;
			&:not(:last-of-type) {
				line-height: 52px;
			}
		}
	}
`;
