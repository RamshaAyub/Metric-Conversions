var input = document.getElementById('input')
var result = document.getElementById('result')
var inputType = document.getElementById('inputType')
var resultType = document.getElementById('resultType')
var inputTypeValue , resultTypeValue;


input.addEventListener("keyup" , myResult)
inputType.addEventListener("change" , myResult)
resultType.addEventListener("change" , myResult)


function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    // FROM OUNCE

    if (inputTypeValue === 'ounce' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 28.35
    }
    else if(inputTypeValue === 'ounce' && resultTypeValue === 'pounds'){
        result.value = Number(input.value) / 16
    }
    else if(inputTypeValue === 'ounce' && resultTypeValue === 'kilograms'){
        result.value = Number(input.value) / 35.274
    }
    else if(inputTypeValue === 'ounce' && resultTypeValue === 'short-tons'){
        result.value = Number(input.value) / 32000
    }
    else if(inputTypeValue === 'ounce' && resultTypeValue === 'mega-grams'){
        result.value = Number(input.value) / 35270
    }
    else if(inputTypeValue === 'ounce' && resultTypeValue === 'ounce'){
        result.value = input.value
    }




    // FROM GRAMS

    if (inputTypeValue === 'grams' && resultTypeValue === 'ounce'){
        result.value = Number(input.value) / 28.35
    }
    else if(inputTypeValue === 'grams' && resultTypeValue === 'pounds'){
        result.value = Number(input.value) / 453.6
    }
    else if(inputTypeValue === 'grams' && resultTypeValue === 'kilograms'){
        result.value = Number(input.value) / 1000
    }
    else if(inputTypeValue === 'grams' && resultTypeValue === 'short-tons'){
        result.value = Number(input.value) / 907200
    }
    else if(inputTypeValue === 'grams' && resultTypeValue === 'mega-grams'){
        result.value = Number(input.value) / 1e+6
    }
    else if(inputTypeValue === 'grams' && resultTypeValue === 'grams'){
        result.value = input.value
    }




    // FROM POUNDS

    if (inputTypeValue === 'pounds' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 453.6
    }
    else if(inputTypeValue === 'pounds' && resultTypeValue === 'ounce'){
        result.value = Number(input.value) * 16 
    }
    else if(inputTypeValue === 'pounds' && resultTypeValue === 'kilograms'){
        result.value = Number(input.value) / 2.205
    }
    else if(inputTypeValue === 'pounds' && resultTypeValue === 'short-tons'){
        result.value = Number(input.value) / 2000
    }
    else if(inputTypeValue === 'pounds' && resultTypeValue === 'mega-grams'){
        result.value = Number(input.value) / 2205
    }
    else if(inputTypeValue === 'pounds' && resultTypeValue === 'pounds'){
        result.value = input.value
    }




    // FROM KILOGRAMS

    if (inputTypeValue === 'kilograms' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 1000
    }
    else if(inputTypeValue === 'kilograms' && resultTypeValue === 'pounds'){
        result.value = Number(input.value) * 2.205 
    }
    else if(inputTypeValue === 'kilograms' && resultTypeValue === 'ounce'){
        result.value = Number(input.value) * 35.274 
    }
    else if(inputTypeValue === 'kilograms' && resultTypeValue === 'short-tons'){
        result.value = Number(input.value) / 907.2
    }
    else if(inputTypeValue === 'kilograms' && resultTypeValue === 'mega-grams'){
        result.value = Number(input.value) / 1000
    }
    else if(inputTypeValue === 'kilograms' && resultTypeValue === 'kilograms'){
        result.value = input.value
    }




    // FROM SHORT TON

    if (inputTypeValue === 'short-tons' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 907200
    }
    else if(inputTypeValue === 'short-tons' && resultTypeValue === 'pounds'){
        result.value = Number(input.value) * 2000
    }
    else if(inputTypeValue === 'short-tons' && resultTypeValue === 'kilograms'){
        result.value = Number(input.value) * 907.2 
    }
    else if(inputTypeValue === 'short-tons' && resultTypeValue === 'ounce'){
        result.value = Number(input.value) * 32000
    }
    else if(inputTypeValue === 'short-tons' && resultTypeValue === 'mega-grams'){
        result.value = Number(input.value) / 1.102
    }
    else if(inputTypeValue === 'short-tons' && resultTypeValue === 'short-tons'){
        result.value = input.value
    }




    // FROM MEGA GRAMS

    if (inputTypeValue === 'mega-grams' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 1e+6
    }
    else if(inputTypeValue === 'mega-grams' && resultTypeValue === 'pounds'){
        result.value = Number(input.value) * 2205
    }
    else if(inputTypeValue === 'mega-grams' && resultTypeValue === 'kilograms'){
        result.value = Number(input.value) * 1000
    }
    else if(inputTypeValue === 'mega-grams' && resultTypeValue === 'short-tons'){
        result.value = Number(input.value) * 1.102
    }
    else if(inputTypeValue === 'mega-grams' && resultTypeValue === 'ounce'){
        result.value = Number(input.value) * 35270
    }
    else if(inputTypeValue === 'mega-grams' && resultTypeValue === 'mega-grams'){
        result.value = input.value
    }

}