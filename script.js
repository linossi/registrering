let totalSum = 0;
let cartItems = [];

function addToCart(price) {
    totalSum += price;
    cartItems.push(price);
    updateTotalSum();
    updateCart();
}

function updateTotalSum() {
    document.getElementById("totalSum").innerText = totalSum;
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = "Produkt " + (index + 1) + ": $" + item;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Fjern";
        removeButton.onclick = function() {
            totalSum -= cartItems[index];
            cartItems.splice(index, 1);
            updateTotalSum();
            updateCart();
        };
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
}

function calculateTotal() {
    if (totalSum > 0) {
        document.getElementById("totalValue").innerText = totalSum;
        document.getElementById("totalBox").classList.remove("hidden");
    }
}

