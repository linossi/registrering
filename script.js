let cartItems = []; // Endre til en array av objekter

function addToCart(productName, price) {
    cartItems.push({name: productName, price: price}); // Legg til både navn og pris i handlekurven
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name + " - Pris: $" + item.price; // Endre teksten til å inkludere både navn og pris
        const removeButton = document.createElement("button");
        removeButton.textContent = "Fjern";
        removeButton.onclick = function() {
            cartItems.splice(index, 1);
            updateCart();
        };
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
}

function calculateTotal() {
    let totalSum = 0;
    cartItems.forEach(item => {
        totalSum += item.price; // Legger til prisen på hvert produkt i totalsummen
    });
    document.getElementById("totalValue").innerText = totalSum;
    document.getElementById("totalBox").classList.remove("hidden");
}





