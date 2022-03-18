import styled from "styled-components";

export const Header = styled.header`
	height: 85px;
	width: 100%;
	border-bottom: 1px solid #e5e5e5;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	#menu,
	#menu-overlay {
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition: 0.3s ease-in-out;
	}

	#menu-overlay.active {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}

	@media screen and (max-width: 992px) {
		background: #fff6e5;
		border-bottom: 0;

		#menu {
			opacity: 1;
			visibility: visible;
			pointer-events: all;
		}

		nav {
			position: absolute;
			width: calc(100vw - 80px);
			max-width: 400px;
			height: 100vh;
			background: #fff;
			top: 0;
			right: 0;
			z-index: 999;
			padding: 1rem;
			transform: translateX(110%);
			opacity: 0;
			visibility: hidden;
			pointer-events: none;

			&.open {
				transform: translateX(0);
				opacity: 1;
				visibility: visible;
				pointer-events: all;
			}

			ul {
				flex-direction: column;
				gap: 1rem !important;
			}
		}

		#menu-overlay {
			position: absolute;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.3);
			top: 0;
			right: 0;
			z-index: 998;
		}
	}

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

	nav {
		transition: 0.3s ease-in-out;

		ul {
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
	}
`;
