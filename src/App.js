import { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);

	useEffect(() => {
		fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
			.then((response) => response.json())
			.then((data) => setProducts([...data]));
	}, []);

	const showProducts = (value) => {
		const productsFound = products.filter(({ name, category, price }) => {
			return (
				name.toLowerCase().includes(value) ||
				category.toLowerCase().includes(value) ||
				price.toString().includes(value)
			);
		});
		console.log("2");
		setFilteredProducts([...productsFound]);
	};

	const findProduct = (event) => {
		const productId = event.target.parentNode.parentNode.id;
		const productFound = products.find(
			({ id }) => Number(productId) === Number(id)
		);
		const valid = currentSale.includes(productFound);
		if (!valid) {
			setCurrentSale([...currentSale, productFound]);
		}
	};

	const removeProductCurrentSale = (productId) => {
		const newCurrentSale = [...currentSale];
		const productIndex = newCurrentSale.findIndex(
			({ id }) => productId === id
		);
		newCurrentSale.splice(productIndex, 1);
		setCurrentSale([...newCurrentSale]);
	};

	const emptyCart = () => {
		setCurrentSale([]);
	};

	return (
		<>
			<Header showProducts={showProducts} />
			<Body
				products={products}
				findProduct={findProduct}
				currentSale={currentSale}
				removeProductCurrentSale={removeProductCurrentSale}
				emptyCart={emptyCart}
				filteredProducts={filteredProducts}
			/>
		</>
	);
}

export default App;
