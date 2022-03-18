import React, { useEffect } from "react";
import timeline1 from "../assets/img/timeline1.svg";
import timeline2 from "../assets/img/timeline2.svg";
import timeline3 from "../assets/img/timeline3.svg";
import * as S from "./Misc.style";

const TimelineSection = () => {
	const scrollOnClick = () => {
		const scrollItems = document.querySelectorAll(
			"#timeline-scroll-btns .scroll-item",
		);
		const grid = document.querySelector("#grid-timeline");
		const gridWidth = grid.scrollWidth / scrollItems.length;
		scrollItems.forEach((item, i) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				let gridItem = document.querySelector(
					`[data-id=${item.getAttribute("data-target")}]`,
				);
				scrollItems.forEach((i) => i.classList.remove("current"));
				item.classList.add("current");
				grid.scrollLeft = i > 0 ? gridWidth * i : 0;
			});
		});
	};

	useEffect(() => {
		scrollOnClick();
	});

	return (
		<S.GriddedSection reverse className="scroll-animation">
			<div className="container">
				<h2>Confira a timeline do prêmio</h2>
				<S.Grid3Columns id="grid-timeline">
					<S.GridItem data-id="timeline-1" compact>
						<img src={timeline1} alt="" />
						<p>
							Garanta sua participação de 22 de julho a 22 de
							agosto
						</p>
					</S.GridItem>
					<S.GridItem data-id="timeline-2" compact>
						<img src={timeline2} alt="" />
						<p>
							Seja avaliado por referências do setor de 23/08 a
							05/09
						</p>
					</S.GridItem>
					<S.GridItem data-id="timeline-3" compact>
						<img src={timeline3} alt="" />
						<p>
							Apareça na lista dos 100 RHs que inspiram em evento
							realizado em setembro
						</p>
					</S.GridItem>
				</S.Grid3Columns>
				<S.GridScrollMobile id="timeline-scroll-btns">
					<a
						href="#"
						data-target="timeline-1"
						className="scroll-item current"
					></a>
					<a
						href="#"
						data-target="timeline-2"
						className="scroll-item"
					></a>
					<a
						href="#"
						data-target="timeline-3"
						className="scroll-item"
					></a>
				</S.GridScrollMobile>
				<S.Button href="#">Acesse o regulamento</S.Button>
			</div>
		</S.GriddedSection>
	);
};

export default TimelineSection;
