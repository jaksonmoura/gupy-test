import styled from "styled-components";
import { SectionDefault } from "./Misc.style";

export const Section = styled(SectionDefault)`
	background: #fffaf0;

	.star {
		#star_color {
			clip-path: url(#star);
			animation: rotate 30s linear infinite;
		}

		svg path {
			animation: rotate 30s linear infinite;
			transform-origin: 50% 50%;
		}
	}
`;
