import React, { useState } from "react";
import * as S from "./CategoriesSection.style";

const CategoriesSection = () => {
	const categories = [
		{ title: "Atrair", color: "#FF607C" },
		{ title: "Desenvolver", color: "#FF8D5C" },
		{ title: "Encantar", color: "#FFCF72" },
		{ title: "Inovar", color: "#27ADD9" },
	];
	return (
		<S.Section>
			<div className="container">
				<h2>Categorias</h2>
				<S.Categories>
					{categories.map((c, i) => (
						<S.Category href="#" key={i} background={c.color}>
							{c.title}
						</S.Category>
					))}
				</S.Categories>
			</div>
		</S.Section>
	);
};

export default CategoriesSection;
