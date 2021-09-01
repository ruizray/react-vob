import React from "react";
import { useState, useEffect } from "react";

const handleSubmit = () => {
	alert("test");
};

const PizzaOrder = () => {
	const [toppings, setToppings] = useState({ Pepperoni: { isChecked: false }, Sausage: { isChecked: false }, Pineapple: { isChecked: false } });
	const [toppingsList, setToppingsList] = useState([]);
	const [size, setSize] = useState({ size: "Small", price: 7.99 });
	const [price, setPrice] = useState(7.99);
	const [method, setMethod] = useState("Pickup");

	const handleToppings = (e) => {
		let newList = { ...toppings };
		newList[e.target.value].isChecked = !newList[e.target.value].isChecked;
		setToppings({ ...newList });
	};
	useEffect(() => {
		adjustPrice();
		console.log("page refresh");
	}, [size, toppings]);

	const adjustPrice = () => {
		var toppingsPrice = 0;
		var toppingsList = [];
		Object.keys(toppings).forEach((topping) => {
			if (toppings[topping].isChecked) {
				toppingsPrice += 0.5;
				toppingsList.push(topping);
			}
		});
		var totalPrice = toppingsPrice + size.price;
		setToppingsList(toppingsList);
		setPrice(totalPrice);
	};
	const handleSizes = (e) => {
		let pizzaSize = e.target.id;
		let sizePrice = e.target.value;
		setSize({ size: pizzaSize, price: +sizePrice });
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2>Pick Toppings</h2>
				<div class='form-check form-check-inline'>
					<input
						onChange={handleToppings}
						class='form-check-input'
						type='checkbox'
						id='Pepperoni'
						value='Pepperoni'
						checked={toppings["Pepperoni"].isChecked}
					/>
					<label class='form-check-label' for='inlineCheckbox1'>
						Pepperoni +$0.50
					</label>
				</div>

				<div class='form-check form-check-inline'>
					<input
						onChange={handleToppings}
						class='form-check-input'
						type='checkbox'
						id='Sausage'
						value='Sausage'
						checked={toppings["Sausage"].isChecked}
					/>
					<label class='form-check-label' for='inlineCheckbox2'>
						Sausage +$0.50
					</label>
				</div>

				<div class='form-check form-check-inline'>
					<input
						onChange={handleToppings}
						class='form-check-input'
						type='checkbox'
						id='Pineapple'
						value={"Pineapple"}
						checked={toppings["Pineapple"].isChecked}
					/>
					<label class='form-check-label' for='inlineCheckbox3'>
						Pineapple +$0.50
					</label>
				</div>
				<h2>Pick Size</h2>
				<div class='form-check form-check-inline'>
					<input onChange={handleSizes} class='form-check-input' type='checkbox' id='Small' value={7.99} checked={size.size === "Small"} />
					<label class='form-check-label' for='inlineCheckbox3'>
						Small $7.99
					</label>
				</div>
				{size && (
					<div class='form-check form-check-inline'>
						<input
							onChange={handleSizes}
							class='form-check-input'
							type='checkbox'
							id='Medium'
							value={10.99}
							checked={size.size === "Medium"}
						/>
						<label class='form-check-label' for='inlineCheckbox3'>
							Medium $10.99
						</label>
					</div>
				)}
				<div class='form-check form-check-inline'>
					<input onChange={handleSizes} class='form-check-input' type='checkbox' id='Large' value={12.99} checked={size.size === "Large"} />
					<label class='form-check-label' for='inlineCheckbox3'>
						Large $12.99
					</label>
				</div>
				<h2>Delivery Options</h2>
				<div class='form-check form-check-inline'>
					<input onChange={() => setMethod("Delivery")} class='form-check-input' type='checkbox' id='Delivery' checked={method === "Delivery"} />
					<label class='form-check-label' for='inlineCheckbox3'>
						Delivery
					</label>
				</div>
				<div class='form-check form-check-inline'>
					<input onChange={() => setMethod("Pickup")} class='form-check-input' type='checkbox' id='Pickup' checked={method === "Pickup"} />
					<label class='form-check-label' for='inlineCheckbox3'>
						Pickup
					</label>
				</div>

				<button type='submit'>Submit</button>
			</form>
			<div>
				Your order contains a {size.size} (
				{toppingsList &&
					toppingsList.map((topping, index) => {
						if (index === toppingsList.length - 1) {
							return <span>{`${topping}`}</span>;
						}
						return <span>{`${topping}, `}</span>;
					})}
				) pizza for {method} <br />
				Total is: {price}
			</div>
		</>
	);
};

export default PizzaOrder;
