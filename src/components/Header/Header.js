import React from "react";
import logo from "../../logo.svg";
import { Button } from "../Misc";
import * as S from "./Header.style";

const Header = () => {
	return (
		<S.Header>
			<div className="container">
				<a href="#" className="logo">
					<img src={logo} alt="Gupy" />
				</a>
				<nav>
					<ul>
						<li>
							<a href="#">Manifesto</a>
						</li>
						<li>
							<a href="#">Nossos compromissos</a>
						</li>
						<li>
							<a href="#">Como fizemos</a>
						</li>
						<li>
							<Button primary href="#">
								Quero adicionar no meu plano
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</S.Header>
	);
};

export default Header;
