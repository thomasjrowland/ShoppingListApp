
let shoppingList = [];

let priceTotal = 0;

function addItemToList(itemName, itemPrice) {
	
	let item = {
			name: itemName, 
			price: itemPrice
			};
	
	shoppingList.push(item);
	
	alert(item.name + " added to list for: $" + item.price + ". Your cart will appear at the bottom of the page when you checkout.");
	
	priceTotal = priceTotal + item.price;
	
}

function printShoppingCart() {
	
	for (let item of shoppingList) {
		//alert(item.name + " $" + item.price)
		console.log(item.name + " $" + item.price);
		
		let cart = document.getElementById("cart");
		let line = document.createElement("p");
		line.innerHTML = (item.name + " $" + item.price);
		cart.appendChild(line);
		
	}
	
	let finalCart = document.getElementById("totalLine");
	totalLine.innerHTML = "total: $" + priceTotal;
	
}
