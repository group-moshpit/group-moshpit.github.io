document.addEventListener("DOMContentLoaded", function () {
    const transactions = [
        { id: "#P001", date: "2025-03-01", item: "Poké Coins (500)", price: "₱499", status: "Completed" },
        { id: "#P002", date: "2025-03-02", item: "Ultra Ball Bundle", price: "₱299", status: "Pending" },
        { id: "#P003", date: "2025-03-03", item: "Adventure Box", price: "₱899", status: "Completed" },
        { id: "#P004", date: "2025-03-04", item: "Lucky Egg Pack", price: "₱199", status: "Pending" },
        { id: "#P005", date: "2025-03-05", item: "Raid Pass Bundle", price: "₱599", status: "Completed" },
        { id: "#P006", date: "2025-03-06", item: "Super Incubator Pack", price: "₱799", status: "Completed" },
        { id: "#P007", date: "2025-03-07", item: "Master Ball", price: "₱999", status: "Pending" },
        { id: "#P008", date: "2025-03-08", item: "Poké Balls (100)", price: "₱150", status: "Completed" },
        { id: "#P009", date: "2025-03-09", item: "Lure Module Bundle", price: "₱399", status: "Pending" },
        { id: "#P010", date: "2025-03-10", item: "Stardust Boost Pack", price: "₱499", status: "Completed" }
    ];

    function loadTransactions(filter = "all") {
        const tableBody = document.getElementById("transactionTable");
        tableBody.innerHTML = "";

        transactions.forEach((transaction) => {
            if (filter === "all" || transaction.status === filter) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${transaction.id}</td>
                    <td>${transaction.date}</td>
                    <td>${transaction.item}</td>
                    <td>${transaction.price}</td>
                    <td class="${transaction.status === 'Completed' ? 'status-completed' : 'status-pending'}">
                        ${transaction.status}
                    </td>
                `;
                tableBody.appendChild(row);
            }
        });
    }

    // Function to filter transactions
    window.filterTransactions = function (status) {
        loadTransactions(status);
    };

    // Load all transactions initially
    loadTransactions();

    // Hamburger menu hover effect
    const menuIcon = document.getElementById("menuIcon");
    menuIcon.addEventListener("mouseenter", function () {
        menuIcon.src = "assets/hover-icon.png"; // Change to hover icon
    });

    menuIcon.addEventListener("mouseleave", function () {
        menuIcon.src = "assets/menu-icon.png"; // Revert back
    });
});
