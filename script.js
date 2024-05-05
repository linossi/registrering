let totalSum = 0;

function addToCart(price) {
    totalSum += price;
    alert("Produktet er lagt til i handlekurven!");
}

window.onload = function() {
    document.querySelector("header").innerHTML += "<div id='cart'><h2>Handlekurv</h2><p>Total sum: $<span id='totalSum'>0</span></p></div>";
    updateTotalSum();
};

function updateTotalSum() {
    document.getElementById("totalSum").innerText = totalSum;
}
