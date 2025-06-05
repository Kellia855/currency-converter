function converter() {

    const input = require('sync-input')
    console.log("Welcome to Currency Converter!")

    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75
    }

    let currency_from = (input("What do you want to convert from: ")).toUpperCase()
    let currency_to = (input("What do you want to convert to: ")).toUpperCase()
    let amount = Number(input("Enter the amount: "))
    if (currencies[currency_to] && currencies[currency_from] ){
        var conv = (amount * currencies[currency_to])/currencies[currency_from]
    } else {
        console.log("Currency not found!")
    }
    console.log(`Amount: ${conv}`)
}

converter()
