import styled from "styled-components";

export const Footer = styled.footer`
	height: 213px;
	width: 100%;
	background: var(--darkBlue);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: #fff;

	a {
		color: #fff;
	}

	.container {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}

	nav {
		.footer-links {
			display: inline-flex;
			gap: 8px;

			a:hover {
				text-decoration: underline;
			}
		}
		ul.social-network {
			display: inline-flex;
			justify-content: space-between;
			align-items: center;
			gap: 36px;
		}
	}
`;
