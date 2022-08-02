import Product from "../Product";
import "./style.css";

const ProductList = ({ products, findProduct, filteredProducts }) => {
	return (
		<ul className='productsList'>
			{filteredProducts.length === 0
				? products.map((product) => (
						<Product product={product} findProduct={findProduct} />
				  ))
				: filteredProducts.map((product) => (
						<Product product={product} findProduct={findProduct} />
				  ))}
		</ul>
	);
};
export default ProductList;
