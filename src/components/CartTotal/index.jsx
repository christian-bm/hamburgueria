import Button from "../Button";
import "./style.css";

const CartTotal = ({ currentSale, emptyCart }) => {
	return (
		<div className='cart-total'>
			<div className="cart-total-div">
				<p className='cart-total-div-title'>Total</p>
				<span className='cart-total-div-price'>
					R${" "}
					{currentSale
						.reduce((acc, product) => (acc += product.price), 0)
						.toFixed(2)
						.replace(".", ",")}
				</span>
			</div>
			<Button className={"cart-total-button"} onClick={emptyCart}>
				Remover Todos
			</Button>
		</div>
	);
};
export default CartTotal;
