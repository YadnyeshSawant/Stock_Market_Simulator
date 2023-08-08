// // // script.js
// // document.addEventListener("DOMContentLoaded", function () {
// //     displayPortfolio();

// //     const addStockForm = document.getElementById("addStockForm");
// //     addStockForm.addEventListener("submit", function (event) {
// //         event.preventDefault();
// //         addStockToPortfolio();
// //     });
// // });

// // function displayPortfolio() {
// //     const portfolioTable = document.getElementById("portfolioTable");
// //     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

// //     portfolioTable.innerHTML = `
// //         <tr>
// //             <th>Stock Name</th>
// //             <th>Quantity</th>
// //             <th>Price</th>
// //             <th>Real Time Profit/Loss</th>
// //         </tr>
// //     `;

// //     for (const stock in portfolioData) {
// //         const stockData = portfolioData[stock];
// //         const row = `
// //             <tr>
// //                 <td>${stock}</td>
// //                 <td>${stockData.quantity}</td>
// //                 <td>${stockData.price}</td>
// //                 <td><!-- Implement real-time profit/loss calculation here --></td>
// //             </tr>
// //         `;
// //         portfolioTable.insertAdjacentHTML("beforeend", row);
// //     }
// // }

// // function addStockToPortfolio() {
// //     const stockName = document.getElementById("stock_name").value;
// //     const stockQuantity = parseInt(document.getElementById("stock_quantity").value);
// //     const stockPrice = parseFloat(document.getElementById("stock_price").value);

// //     if (!stockName || isNaN(stockQuantity) || isNaN(stockPrice)) {
// //         alert("Please fill all the fields with valid values.");
// //         return;
// //     }

// //     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

// //     if (stockName in portfolioData) {
// //         portfolioData[stockName].quantity += stockQuantity;
// //     } else {
// //         portfolioData[stockName] = {
// //             quantity: stockQuantity,
// //             price: stockPrice
// //         };
// //     }

// //     localStorage.setItem("portfolio", JSON.stringify(portfolioData));

// //     displayPortfolio();

// //     // Clear the form fields after adding to the portfolio
// //     document.getElementById("addStockForm").reset();
// // }

// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     displayPortfolio();

//     const addStockForm = document.getElementById("addStockForm");
//     addStockForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         addStockToPortfolio();
//     });
// });

// function displayPortfolio() {
//     const portfolioTable = document.getElementById("portfolioTable");
//     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

//     portfolioTable.innerHTML = `
//         <tr>
//             <th>Stock Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Real Time Profit/Loss</th>
//             <th>Action</th>
//         </tr>
//     `;

//     for (const stock in portfolioData) {
//         const stockData = portfolioData[stock];
//         const row = `
//             <tr>
//                 <td>${stock}</td>
//                 <td>${stockData.quantity}</td>
//                 <td>${stockData.price}</td>
//                 <td><!-- Implement real-time profit/loss calculation here --></td>
//                 <td><button class="delete-button" onclick="deleteStock('${stock}')">Delete</button></td>
//             </tr>
//         `;
//         portfolioTable.insertAdjacentHTML("beforeend", row);
//     }
// }

// function addStockToPortfolio() {
//     // ... (existing code)

//     displayPortfolio();

//     // ... (existing code)
// }

// function deleteStock(stockName) {
//     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

//     if (stockName in portfolioData) {
//         delete portfolioData[stockName];
//         localStorage.setItem("portfolio", JSON.stringify(portfolioData));
//         displayPortfolio();
//     }
// }
// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     displayPortfolio();

//     const addStockForm = document.getElementById("addStockForm");
//     addStockForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         addStockToPortfolio();
//     });
// });

// function displayPortfolio() {
//     const portfolioTable = document.getElementById("portfolioTable");
//     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

//     portfolioTable.innerHTML = `
//         <tr>
//             <th>Stock Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Real Time Profit/Loss</th>
//             <th>Action</th>
//         </tr>
//     `;

//     for (const stock in portfolioData) {
//         const stockData = portfolioData[stock];
//         const row = `
//             <tr>
//                 <td>${stock}</td>
//                 <td>${stockData.quantity}</td>
//                 <td>${stockData.price}</td>
//                 <td><!-- Implement real-time profit/loss calculation here --></td>
//                 <td><button class="delete-button" onclick="deleteStock('${stock}')">Delete</button></td>
//             </tr>
//         `;
//         portfolioTable.insertAdjacentHTML("beforeend", row);
//     }
// }

// function addStockToPortfolio() {
//     const stockName = document.getElementById("stock_name").value;
//     const stockQuantity = parseInt(document.getElementById("stock_quantity").value);
//     const stockPrice = parseFloat(document.getElementById("stock_price").value);

//     if (!stockName || isNaN(stockQuantity) || isNaN(stockPrice)) {
//         alert("Please fill all the fields with valid values.");
//         return;
//     }

//     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

//     if (stockName in portfolioData) {
//         portfolioData[stockName].quantity += stockQuantity;
//     } else {
//         portfolioData[stockName] = {
//             quantity: stockQuantity,
//             price: stockPrice
//         };
//     }

//     localStorage.setItem("portfolio", JSON.stringify(portfolioData));

//     displayPortfolio();

//     // Clear the form fields after adding to the portfolio
//     document.getElementById("addStockForm").reset();
// }

// function deleteStock(stockName) {
//     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

//     if (stockName in portfolioData) {
//         delete portfolioData[stockName];
//         localStorage.setItem("portfolio", JSON.stringify(portfolioData));
//         displayPortfolio();
//     }
// }
// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     displayPortfolio();

//     const addStockForm = document.getElementById("addStockForm");
//     addStockForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         addStockToPortfolio();
//     });
// });

// function displayPortfolio() {
//     const portfolioTable = document.getElementById("portfolioTable");
//     const portfolioData = JSON.parse(localStorage.getItem("portfolio")) || {};

//     portfolioTable.innerHTML = `
//         <tr>
//             <th>Stock Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Real Time Profit/Loss</th>
//             <th>Action</th>
//         </tr>
//     `;

//     for (const stock in portfolioData) {
//         const stockData = portfolioData[stock];
//         const row = `
//             <tr>
//                 <td>${stock}</td>
//                 <td>${stockData.quantity}</td>
//                 <td>${stockData.price}</td>
//                 <td><!-- Implement real-time profit/loss calculation here --></td>
//                 <td>
//                     <button class="buy-button" onclick="buyStock('${stock}')">BUY</button>
//                     <button class="sell-button" onclick="sellStock('${stock}')">SELL</button>
//                 </td>
//             </tr>
//         `;
//         portfolioTable.insertAdjacentHTML("beforeend", row);
//     }
// }

// function addStockToPortfolio() {
//     // ... (existing code)

//     displayPortfolio();

//     // ... (existing code)
// }

// function buyStock(stockName) {
//     // Handle the "BUY" button action here
//     // You can implement the buying logic and update the portfolio accordingly
//     // For simplicity, we'll just log a message to the console.
//     console.log(`Buying stock: ${stockName}`);
// }

// function sellStock(stockName) {
//     // Handle the "SELL" button action here
//     // You can implement the selling logic and update the portfolio accordingly
//     // For simplicity, we'll just log a message to the console.
//     console.log(`Selling stock: ${stockName}`);
// }
// script.js
document.addEventListener("DOMContentLoaded", function () {
    displayPortfolio();

    const addStockForm = document.getElementById("addStockForm");
    addStockForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addStockToPortfolio();
    });

    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalQuantity = document.getElementById("modalQuantity");
    const modalConfirmBtn = document.getElementById("modalConfirmBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    function showModal(title, stockName) {
        modal.style.display = "block";
        modalTitle.innerText = title;
        modalQuantity.value = "";
        modalConfirmBtn.onclick = function () {
            const quantity = parseInt(modalQuantity.value);
            if (!isNaN(quantity)) {
                if (title === "BUY") {
                    buyStock(stockName, quantity);
                } else if (title === "SELL") {
                    sellStock(stockName, quantity);
                }
                modal.style.display = "none";
            }
        };
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
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
            <th>Action</th>
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
                <td>
                    <button class="buy-button" onclick="showModal('BUY', '${stock}')">BUY</button>
                    <button class="sell-button" onclick="showModal('SELL', '${stock}')">SELL</button>
                </td>
            </tr>
        `;
        portfolioTable.insertAdjacentHTML("beforeend", row);
    }
}

function addStockToPortfolio() {
    // ... (existing code)

    displayPortfolio();

    // ... (existing code)
}

function buyStock(stockName, quantity) {
    // Implement the buying logic here
    // Update the portfolio data in local storage accordingly
    console.log(`Buying ${quantity} shares of ${stockName}`);
}

function sellStock(stockName, quantity) {
    // Implement the selling logic here
    // Update the portfolio data in local storage accordingly
    console.log(`Selling ${quantity} shares of ${stockName}`);
}
