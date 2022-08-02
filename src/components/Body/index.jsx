import Cart from "../Cart";
import ProductList from "../ProductList";
import "./style.css";

const Body = ({
	products,
	findProduct,
	currentSale,
	removeProductCurrentSale,
	emptyCart,
	filteredProducts,
}) => {
	return (
		<section>
			<ProductList
				products={products}
				findProduct={findProduct}
				filteredProducts={filteredProducts}
			/>
			<Cart
				currentSale={currentSale}
				removeProductCurrentSale={removeProductCurrentSale}
				emptyCart={emptyCart}
			/>
		</section>
	);
};
export default Body;
