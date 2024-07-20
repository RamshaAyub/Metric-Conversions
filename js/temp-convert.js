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

    // FROM INCHES

    if (inputTypeValue === 'celsius' && resultTypeValue === 'fahrenheit'){
        result.value = Number(input.value) * 9/5 + 32 
    }
    else if(inputTypeValue === 'celsius' && resultTypeValue === 'celsius'){
        result.value = input.value
    }



    if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'celsius'){                         
        result.value = Number(input.value -32) * 5/9                                                                            
    }                          
    else if(inputTypeValue === 'fahrenheit' && resultTypeValue === 'fahrenheit'){
        result.value = input.value
    }
}