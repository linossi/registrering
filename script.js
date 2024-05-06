let totalSum = 0;
let cartItems = [];

function addToCart(price) {
    cartItems.push(price);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    totalSum = 0; // Nullstiller totalsummen
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = "Produkt " + (index + 1) + ": $" + item;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Fjern";
        removeButton.onclick = function() {
            totalSum -= cartItems[index];
            cartItems.splice(index, 1);
            updateCart();
        };
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        totalSum += item; // Oppdaterer totalsummen
    });
}

function calculateTotal() {
    document.getElementById("totalValue").innerText = totalSum;
    document.getElementById("totalBox").classList.remove("hidden");
}


