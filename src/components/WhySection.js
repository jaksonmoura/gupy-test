import React from "react";
import trofeu from "../assets/trofeu.svg";
import foguete from "../assets/foguete.svg";
import mao from "../assets/mao.svg";
import * as S from "./Misc.style";

const WhySection = () => {
	return (
		<S.GriddedSection className="scroll-animation">
			<div className="container">
				<h2>Por quê se inscrever.</h2>
				<S.Grid3Columns>
					<S.GridItem>
						<img src={trofeu} alt="" />
						<h3>Reconhecimento com investimento zero</h3>
						<p>
							Reforce a qualidade da gestão de pessoas interna e
							externamente com o selo dos 100 RHs que mais inovam
							e inspiram no Brasil.
						</p>
					</S.GridItem>
					<S.GridItem>
						<img src={mao} alt="" />
						<h3>Atração e retenção de talentos</h3>
						<p>
							Uma conquista que comprova os esforços na área de
							gestão de pessoas e ajuda a encantar profissionais
							comprometidos com ambientes inovadores.
						</p>
					</S.GridItem>
					<S.GridItem>
						<img src={foguete} alt="" />
						<h3>Seja agente de transformação</h3>
						<p>
							Suas práticas como inspiração para empresas de todo
							o país, multiplicando projetos que deram certo e
							ajudando a transformar o RH.
						</p>
					</S.GridItem>
				</S.Grid3Columns>
				<S.Button href="#">Inscreva-se</S.Button>
			</div>
		</S.GriddedSection>
	);
};

export default WhySection;
