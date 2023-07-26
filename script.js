// script.js
document.addEventListener("DOMContentLoaded", function () {
    displayPortfolio();

    const addStockForm = document.getElementById("addStockForm");
    addStockForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addStockToPortfolio();
    });
});

function displayPortfolio() {
    const portfolioTable = document.getElementById("portfolioTable");
    const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

    portfolioTable.innerHTML = `
        <tr>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Real Time Profit/Loss</th>
        </tr>
    `;

    for (const stock in portfolioData) {
        const stockData = portfolioData[stock];
        const row = `
            <tr>
                <td>${stock}</td>
                <td>${stockData.quantity}</td>
                <td>${stockData.price}</td>
                <td><!-- Implement real-time profit/loss calculation here --></td>
            </tr>
        `;
        portfolioTable.insertAdjacentHTML("beforeend", row);
    }
}

function addStockToPortfolio() {
    const stockName = document.getElementById("stock_name").value;
    const stockQuantity = parseInt(document.getElementById("stock_quantity").value);
    const stockPrice = parseFloat(document.getElementById("stock_price").value);

    if (!stockName || isNaN(stockQuantity) || isNaN(stockPrice)) {
        alert("Please fill all the fields with valid values.");
        return;
    }

    const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

    if (stockName in portfolioData) {
        portfolioData[stockName].quantity += stockQuantity;
    } else {
        portfolioData[stockName] = {
            quantity: stockQuantity,
            price: stockPrice
        };
    }

    localStorage.setItem("portfolio", JSON.stringify(portfolioData));

    displayPortfolio();

    // Clear the form fields after adding to the portfolio
    document.getElementById("addStockForm").reset();
}
