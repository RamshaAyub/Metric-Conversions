// var input = document.getElementById('input')
// var result = document.getElementById('result')
// var inputType = document.getElementById('inputType')
// var resultType = document.getElementById('resultType')
// var inputTypeValue , resultTypeValue;

// input.addEventListener("keyup" , myResult)
// inputType.addEventListener("change" , myResult)
// resultType.addEventListener("change" , myResult)

// function myResult(){
//     inputTypeValue = inputType.value
//     resultTypeValue = resultType.value

//     // FROM USD

//     if (inputTypeValue === 'USD' && resultTypeValue === 'AED'){
//         result.value = Number(input.value) *3.6732
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'ARS'){
//         result.value = Number(input.value) *899.3424
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'AUD'){
//         result.value = Number(input.value) *1.5196
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'BGN'){
//         result.value = Number(input.value) *1.8105
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'BRL'){
//         result.value = Number(input.value) *5.3541
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'BSD'){
//         result.value = Number(input.value) *1.01
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'CAD'){
//         result.value = Number(input.value) *1.3765
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'CHF'){
//         result.value = Number(input.value) *0.8967
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'CLP'){
//         result.value = Number(input.value) * 920.0051
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'CNY'){
//         result.value = Number(input.value) * 7.2478
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'COP'){
//         result.value = Number(input.value) * 3936.8821
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'CZK'){
//         result.value = Number(input.value) *22.8719
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'DKK'){
//         result.value = Number(input.value) *6.9235
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'DOP'){
//         result.value = Number(input.value) *59.3795
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'EGP'){
//         result.value = Number(input.value) * 47.6512
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'EUR'){
//         result.value = Number(input.value) * 0.9256
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'FJD'){
//         result.value = Number(input.value) *0.4408
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'GBP'){
//         result.value = Number(input.value) *0.7863
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'GTQ'){
//         result.value = Number(input.value) *7.82
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'HKD'){
//         result.value = Number(input.value) * 7.8128
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'HRK'){
//         result.value = Number(input.value) *7.0423
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'HUF'){
//         result.value = Number(input.value) * 362.4444
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'IDR'){
//         result.value = Number(input.value) * 16178.125
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'ILS'){
//         result.value = Number(input.value) * 3.7624
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'INR'){
//         result.value = Number(input.value) * 83.526
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'ISK'){
//         result.value = Number(input.value) *138.7351
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'JPY'){
//         result.value = Number(input.value) *156.655
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'KRW'){
//         result.value = Number(input.value) * 1380.0076
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'KZT'){
//         result.value = Number(input.value) *446.4306
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'MVR'){
//         result.value = Number(input.value) *15.4601
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'MXN'){
//         result.value = Number(input.value) *18.2971
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'MYR'){
//         result.value = Number(input.value) *4.6828
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'NOK'){
//         result.value = Number(input.value) *10.7311
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'NZD'){
//         result.value = Number(input.value) *1.6378
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'PAB'){
//         result.value = Number(input.value) *1.01
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'PEN'){
//         result.value = Number(input.value) *3.7519
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'PHP'){
//         result.value = Number(input.value) *58.7066
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'PKR'){
//         result.value = Number(input.value) *278.7079
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'PLN'){
//         result.value = Number(input.value) *3.9998
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'PYG'){
//         result.value = Number(input.value) *7518.4647
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'RON'){
//         result.value = Number(input.value) *4.6053
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'RUB'){
//         result.value = Number(input.value) *89.0634
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'SAR'){
//         result.value = Number(input.value) *3.7507
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'SEK'){
//         result.value = Number(input.value) *10.5596
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'SGD'){
//         result.value = Number(input.value) *1.3528
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'THB'){
//         result.value = Number(input.value) *36.7978
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'TRY'){
//         result.value = Number(input.value) *32.432
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'TWD'){
//         result.value = Number(input.value) *32.4204
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'UAH'){
//         result.value = Number(input.value) *40.2354
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'UYU'){
//         result.value = Number(input.value) *38.8503
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'ZAR'){
//         result.value = Number(input.value) *18.9095
//     }
//     else if(inputTypeValue === 'USD' && resultTypeValue === 'USD'){
//         result.value = input.value
//     }

// }

var select = document.querySelectorAll(".currency"),
  input_currency = document.getElementById("input_currency"),
  output_currency = document.getElementById("output_currency");

fetch(`https://api.frankfurter.app/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    console.log(data);
    for (var i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

function convert() {
  input_currency_val = input_currency.value;
  if (select[0].value != select[1].value) {
    // alert("yes");
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`
    )
      .then((val) => val.json())
      .then((val) => {
        //alert(`10 GBP = ${data.rates.USD} USD`);
        output_currency.value = Object.values(val.rates)[0];
        console.log(Object.values(val.rates)[0]);
      });
  } else {
    // alert("Peease select two different currencies");
  }
}
