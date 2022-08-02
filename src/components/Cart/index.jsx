import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./style.css";

const Cart = ({ currentSale, removeProductCurrentSale, emptyCart }) => {
	return (
		<div className='cart'>
			<div className='cart-divTitle'>
				<h2>Carrinho de compras</h2>
			</div>
			{currentSale.length === 0 ? (
				<div className='cart-divNoItens'>
					<h3>Sua sacola está vazia</h3>
					<span>Adicione itens</span>
				</div>
			) : (
				<>
					<ul className='cart-itens'>
						{currentSale.map((product) => <CartProduct product={product} removeProductCurrentSale={removeProductCurrentSale}/>)}
					</ul>
					<CartTotal
						className={"cart-total"}
						currentSale={currentSale}
						emptyCart={emptyCart}
					/>
				</>
			)}
		</div>
	);
};
export default Cart;
