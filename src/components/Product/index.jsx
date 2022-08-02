import Button from "../Button";
import FigureImg from "../FigureImg";
import "./style.css";

const Product = ({ product, findProduct }) => {
	const { id, name, category, price, img } = product;
	return (
		<li key={id} id={id} className='product'>
			<FigureImg className={"product-img"} src={img} alt={name} />
			<div className='product-div'>
				<h3 className='product-div-name'>{name}</h3>
				<p className='product-div-category'>{category}</p>
				<span className='product-div-price'>R$ {price.toFixed(2).replace('.',',')}</span>
				<Button className={"product-div-button"} onClick={findProduct}>
					Adicionar
				</Button>
			</div>
		</li>
	);
};
export default Product;
