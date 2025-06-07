const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

function convert() {
    let currencyFrom = document.getElementById("currencyFrom").value.toUpperCase();
    let currencyTo = document.getElementById("currencyTo").value.toUpperCase();
    let amount = Number(document.getElementById("amount").value);

    if (currencies[currencyTo] && currencies[currencyFrom]) {
        let conv = (amount * currencies[currencyTo]) / currencies[currencyFrom];
        document.getElementById("result").innerText = `Converted Amount: ${conv.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Currency not found!";
    }
}