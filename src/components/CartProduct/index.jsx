import Button from "../Button";
import FigureImg from "../FigureImg";
import "./style.css";

const CartProduct = ({ product, removeProductCurrentSale }) => {
	const { id, name, category, price, img } = product;

	return (
		<li key={id} className='cartProduct'>
			<FigureImg className={"cartProduct-img"} src={img} alt={name} />
			<div className='cartProduct-div'>
				<h3 className='cartProduct-div-name'>{name}</h3>
				<Button
					className={"cartProduct-div-button"}
					onClick={removeProductCurrentSale}>
					Remover
				</Button>
				<p className='cartProduct-div-category'>{category}</p>
				<span className='cartProduct-div-price'>R$ {price.toFixed(2).replace('.',',')}</span>
			</div>
		</li>
	);
};

export default CartProduct;
