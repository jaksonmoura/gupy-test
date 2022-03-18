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

	@media screen and (max-width: 992px) {
		height: auto;
		padding: 64px 0;
		.logo {
			margin-bottom: 2.5rem;
		}
		nav {
			flex-direction: column;
			gap: 8px;

			.social-network {
				margin-top: 3rem;
			}
		}
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
