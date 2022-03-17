import React from "react";
import { Button } from "./Misc";
import * as S from "./HeroSection.style";

const HeroSection = () => {
	return (
		<S.Section>
			<div className="container">
				<div className="circle animate up-down"></div>
				<div className="asterisk animate left-right"></div>
				<div className="hero-wrapper">
					<h1>
						Prêmio <br />
						100 RHs que inspiram
					</h1>
					<p>
						Sua equipe é capaz de inspirar e incentivar a inovação
						na área de Recursos Humanos? <br />É hora de valorizar
						quem está transformando a gestão de pessoas no Brasil:
						Conheça o Gupy Destaca!
					</p>
					<p className="data-inscricao">
						Inscrições de 22 de julho a 22 de agosto de 2021
					</p>
					<Button href="#">Inscreva-se</Button>
				</div>
			</div>
		</S.Section>
	);
};

export default HeroSection;
