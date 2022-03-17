import React from "react";
import timeline1 from "../assets/timeline1.svg";
import timeline2 from "../assets/timeline2.svg";
import timeline3 from "../assets/timeline3.svg";
import * as S from "./Misc.style";

const TimelineSection = () => {
	return (
		<S.GriddedSection reverse className="scroll-animation">
			<div className="container">
				<h2>Confira a timeline do prêmio</h2>
				<S.Grid3Columns>
					<S.GridItem compact>
						<img src={timeline1} alt="" />
						<p>
							Garanta sua participação de 22 de julho a 22 de
							agosto
						</p>
					</S.GridItem>
					<S.GridItem compact>
						<img src={timeline2} alt="" />
						<p>
							Seja avaliado por referências do setor de 23/08 a
							05/09
						</p>
					</S.GridItem>
					<S.GridItem compact>
						<img src={timeline3} alt="" />
						<p>
							Apareça na lista dos 100 RHs que inspiram em evento
							realizado em setembro
						</p>
					</S.GridItem>
				</S.Grid3Columns>
				<S.Button href="#">Acesse o regulamento</S.Button>
			</div>
		</S.GriddedSection>
	);
};

export default TimelineSection;
