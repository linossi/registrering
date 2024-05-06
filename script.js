let totalSum = 0;
let cartItems = [];

function addToCart(productName, price) {
    cartItems.push(productName);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
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
    document.getElementById("totalValue").innerText = totalSum;
    document.getElementById("totalBox").classList.remove("hidden");
}





