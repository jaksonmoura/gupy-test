import styled from "styled-components";
import { SectionDefault } from "./Misc.style";

export const Section = styled(SectionDefault)`
	background: #fffaf0;

	.star {
		animation: rotate 60s linear infinite reverse;
		transform-origin: 50% 50%;
		#star_color {
			clip-path: url(#star);
		}

		svg path {
			animation: rotate 33s linear infinite;
			transform-origin: 50% 50%;
		}
	}
`;
