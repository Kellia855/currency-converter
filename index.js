const apiUrl = `https://v6.exchangerate-api.com/v6/e081368868ccab84a477d34d/latest/USD`; // Example API URL

async function fetchCurrencies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const exchangeRates = data.conversion_rates;

        let fromSelect = document.getElementById("fromCurrency");
        let toSelect = document.getElementById("toCurrency");

        // Populate dropdowns with all currency codes
        Object.keys(exchangeRates).forEach(currency => {
            let optionFrom = document.createElement("option");
            optionFrom.value = currency;
            optionFrom.textContent = currency;
            fromSelect.appendChild(optionFrom);

            let optionTo = document.createElement("option");
            optionTo.value = currency;
            optionTo.textContent = currency;
            toSelect.appendChild(optionTo);
        });

    } catch (error) {
        console.error("Error fetching currencies:", error);
    }
}

async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || amount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const exchangeRates = data.conversion_rates;

        if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
            document.getElementById("result").textContent = "Invalid currency selection.";
            return;
        }

        let convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
        document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById("result").textContent = "Error fetching exchange rates.";
        console.error("Error:", error);
    }
}

// Load currencies when the page loads
document.addEventListener("DOMContentLoaded", fetchCurrencies);