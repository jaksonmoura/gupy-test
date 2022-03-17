import React from "react";
import logo from "../../logo_footer.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/insta.svg";
import * as S from "./Footer.style";

const Footer = () => {
	return (
		<S.Footer>
			<div className="container">
				<a href="#" className="logo">
					<img src={logo} alt="Gupy" />
				</a>
				<span>©2015-2021 Gupy. Todos os direitos reservados.</span>
				<nav>
					<div className="footer-links">
						<a href="#">Política de Privacidade</a>|
						<a href="#">Termos de uso</a>
					</div>
				</nav>
				<nav>
					<ul className="social-network">
						<li>
							<a href="#">
								<img src={facebook} alt="Facebook Gupy" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={youtube} alt="Youtube Gupy" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={linkedin} alt="Linkedin Gupy" />
							</a>
						</li>
						<li>
							<a className="" href="#">
								<img src={instagram} alt="Instagram Gupy" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</S.Footer>
	);
};

export default Footer;
