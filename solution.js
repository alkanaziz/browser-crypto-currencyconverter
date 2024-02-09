// Write your code here
const formElem = document.getElementById("conversion-form");

const convertFrom = document.getElementById("convert-from");
const convertCount = document.getElementById("convert-count");
const convertTo = document.getElementById("convert-to");
const outputElem = document.getElementById("output");

const baseUrl = "https://api.coinbase.com/v2/prices"

formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const crypto = convertFrom.value.toUpperCase();
    const currency = convertTo.value.toUpperCase();
    const countValue = convertCount.value.toUpperCase();
    // console.log(crypto);
    // console.log(currency)
    // console.log(countValue)

    const url = `${baseUrl}/${crypto}-${currency}/spot`;
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            outputElem.value = (countValue * item.data.amount).toFixed(2);
        })
        .catch((err) => {
            console.log("Fehler beim Fetching")
        });
});