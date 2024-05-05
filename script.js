let totalSum = 0;

function addToCart(price) {
    totalSum += price;
    updateTotalSum();
}

function updateTotalSum() {
    document.getElementById("totalSum").innerText = totalSum;
}

