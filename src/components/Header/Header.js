import React, { useEffect } from "react";
import logo from "../../logo.svg";
import menuicon from "../../assets/img/menu.svg";
import { Button } from "../Misc.style";
import * as S from "./Header.style";

const Header = () => {
	const handleEvents = () => {
		const menu = document.querySelector("#menu");
		const overlay = document.querySelector("#menu-overlay");
		const nav = document.querySelector("header nav");
		menu.addEventListener("click", (e) => {
			e.preventDefault();
			overlay.classList.add("active");
			nav.classList.add("open");
		});
		overlay.addEventListener("click", (e) => {
			e.preventDefault();
			overlay.classList.remove("active");
			nav.classList.remove("open");
		});
	};

	useEffect(() => {
		handleEvents();
	});

	return (
		<S.Header>
			<div className="container">
				<a href="#" className="logo">
					<img src={logo} alt="Gupy" />
				</a>
				<a href="#menu" id="menu">
					<img src={menuicon} alt="MENU" />
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
			<div id="menu-overlay"></div>
		</S.Header>
	);
};

export default Header;
