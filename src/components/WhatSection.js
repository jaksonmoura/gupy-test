import React from "react";
import starimg from "../assets/img/rh/rh_star_color.png";
import * as S from "./WhatSection.style";

const WhatSection = () => {
	return (
		<S.Section>
			<div className="star">
				<img src={starimg} alt="" id="star_color" />
				<svg
					width="248"
					height="250"
					viewBox="0 0 248 250"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<clipPath id="star">
							<path
								d="M124 0L139.064 39.5679L166.753 7.53842L167.375 49.8723L204.348 29.2444L190.454 69.2382L232.253 62.5L205.518 95.3298L247.101 103.294L210.75 125L247.101 146.706L205.518 154.67L232.253 187.5L190.454 180.762L204.348 220.756L167.375 200.128L166.753 242.462L139.064 210.432L124 250L108.936 210.432L81.2475 242.462L80.625 200.128L43.6516 220.756L57.5456 180.762L15.7468 187.5L42.4817 154.67L0.899033 146.706L37.25 125L0.899033 103.294L42.4817 95.3298L15.7468 62.5L57.5456 69.2382L43.6516 29.2444L80.625 49.8723L81.2475 7.53842L108.936 39.5679L124 0Z"
								fill="white"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className="container">
				<h2>O que é</h2>
			</div>
		</S.Section>
	);
};

export default WhatSection;
