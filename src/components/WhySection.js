import React from "react";
import trofeu from "../assets/img/trofeu.svg";
import foguete from "../assets/img/foguete.svg";
import mao from "../assets/img/mao.svg";
import * as S from "./Misc.style";
import { useEffect } from "react";

const WhySection = () => {
	const scrollOnClick = () => {
		const scrollItems = document.querySelectorAll(
			"#porque-scroll-btns .scroll-item",
		);
		const grid = document.querySelector("#grid-porque");
		const gridWidth = grid.scrollWidth / scrollItems.length;
		scrollItems.forEach((item, i) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
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
		<S.GriddedSection className="scroll-animation">
			<div className="container">
				<h2>Por que se inscrever</h2>
				<S.Grid3Columns id="grid-porque">
					<S.GridItem data-id="porque-inscrever-1">
						<img src={trofeu} alt="" />
						<h3>Reconhecimento com investimento zero</h3>
						<p>
							Reforce a qualidade da gestão de pessoas interna e
							externamente com o selo dos 100 RHs que mais inovam
							e inspiram no Brasil.
						</p>
					</S.GridItem>
					<S.GridItem data-id="porque-inscrever-2">
						<img src={mao} alt="" />
						<h3>Atração e retenção de talentos</h3>
						<p>
							Uma conquista que comprova os esforços na área de
							gestão de pessoas e ajuda a encantar profissionais
							comprometidos com ambientes inovadores.
						</p>
					</S.GridItem>
					<S.GridItem data-id="porque-inscrever-3">
						<img src={foguete} alt="" />
						<h3>Seja agente de transformação</h3>
						<p>
							Suas práticas como inspiração para empresas de todo
							o país, multiplicando projetos que deram certo e
							ajudando a transformar o RH.
						</p>
					</S.GridItem>
				</S.Grid3Columns>
				<S.GridScrollMobile id="porque-scroll-btns">
					<a
						data-target="porque-inscrever-1"
						href="#"
						className="scroll-item current"
					></a>
					<a
						data-target="porque-inscrever-2"
						href="#"
						className="scroll-item"
					></a>
					<a
						data-target="porque-inscrever-3"
						href="#"
						className="scroll-item"
					></a>
				</S.GridScrollMobile>
				<S.Button href="#">Inscreva-se</S.Button>
			</div>
		</S.GriddedSection>
	);
};

export default WhySection;
