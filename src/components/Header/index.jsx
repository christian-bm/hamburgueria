import FigureImg from "../FigureImg";
import Button from "../Button";
import BurguerKenzie from "../../img/burguerKenzie.png";
import "./style.css";
import { useEffect, useState } from "react";

const Header = ({ showProducts }) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		showProducts(value);
	}, [value]);

	const buttonSearch = () => {
		showProducts(value);
	};

	return (
		<header>
			<div className='header-geral'>
				<FigureImg
					className={"header-geral-figure"}
					src={BurguerKenzie}
					alt={"logo Burguer Kenzie"}
				/>
				<div className='header-geral-div'>
					<input
						value={value}
						name='search'
						className='header-geral-div-input'
						placeholder='Digitar Pesquisa'
						onChange={(e) => setValue(e.target.value)}
					/>
					<Button
						onClick={buttonSearch}
						className={"header-geral-div-button"}>
						Pesquisar
					</Button>
				</div>
			</div>
		</header>
	);
};
export default Header;
