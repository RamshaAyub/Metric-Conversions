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

    // FROM  SQUARE-INCHES

    if (inputTypeValue === 'square-inches' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 645.2
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) / 144
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) / 1550
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) / 1296
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'acres'){
        result.value = Number(input.value) / 6.273e+6
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) / 1.55e+7
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 4.014e+9
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 1.55e+9
    }
    else if(inputTypeValue === 'square-inches' && resultTypeValue === 'square-inches'){
        result.value = input.value
    }




    // FROM  SQUARE-MILLIMETERS

    if (inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-inches'){
        result.value = Number(input.value) / 645.2 
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) / 92900
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) / 1e+6
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) / 836100
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'acres'){
        result.value = Number(input.value) / 4.047e+9
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) / 1e+10
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 2.59e+12
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 1e+12
    }
    else if(inputTypeValue === 'square-millimeters' && resultTypeValue === 'square-millimeters'){
        result.value = input.value
    }




    // FROM  SQUARE-FEET

    if (inputTypeValue === 'square-feet' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 92900
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'square-inches'){
        result.value = Number(input.value) * 144
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) / 10.764
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) / 9
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'acres'){
        result.value = Number(input.value) / 43560
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) / 107600
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 2.788e+7
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 1.076e+7
    }
    else if(inputTypeValue === 'square-feet' && resultTypeValue === 'square-feet'){
        result.value = input.value
    }




    // FROM  SQUARE-METERS

    if (inputTypeValue === 'square-meters' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 1e+6
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) * 10.764
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'square-inches'){
        result.value = Number(input.value) * 1550 
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) * 1.196 
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'acres'){
        result.value = Number(input.value) / 4047
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) / 10000
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 2.59e+5
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 1e+6
    }
    else if(inputTypeValue === 'square-meters' && resultTypeValue === 'square-meters'){
        result.value = input.value
    }




    // FROM  SQUARE-YARDS

    if (inputTypeValue === 'square-yards' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 836100
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) * 9
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) / 1.196
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'square-inches'){
        result.value = Number(input.value) * 1296
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'acres'){
        result.value = Number(input.value) / 4840
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) / 11960
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 3.098e+6
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 1.196e+6
    }
    else if(inputTypeValue === 'square-yards' && resultTypeValue === 'square-yards'){
        result.value = input.value
    }




    // FROM  ACRES

    if (inputTypeValue === 'acres' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 4.047e+9
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) * 43560
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) * 4047
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) * 4840
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'inches'){
        result.value = Number(input.value) * 6.273e+6 
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) / 2.471
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 640
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 247.1
    }
    else if(inputTypeValue === 'acres' && resultTypeValue === 'acres'){
        result.value = input.value
    }




    // FROM  HECTARES

    if (inputTypeValue === 'hectares' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 1e+10
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) * 107600
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) * 10000
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) * 11960
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'acres'){
        result.value = Number(input.value) * 2.471
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'inches'){
        result.value = Number(input.value) * 1.55e+7
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 259
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) / 100
    }
    else if(inputTypeValue === 'hectares' && resultTypeValue === 'hectares'){
        result.value = input.value
    }




    // FROM  SQUARE-MILES

    if (inputTypeValue === 'square-miles' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 2.59e+12
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) * 2.788e+7 
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) * 2.59e+6
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) / 3.098e+6
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'acres'){
        result.value = Number(input.value) * 640
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) * 259
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'square-inches'){
        result.value = Number(input.value) * 4.014e+9 
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'square-kilometers'){
        result.value = Number(input.value) * 2.59 
    }
    else if(inputTypeValue === 'square-miles' && resultTypeValue === 'square-miles'){
        result.value = input.value
    }




    // FROM  SQUARE-KILOMETERS

    if (inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-millimeters'){
        result.value = Number(input.value) * 1e+12
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-feet'){
        result.value = Number(input.value) * 1.076e+7
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-meters'){
        result.value = Number(input.value) * 1e+6
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-yards'){
        result.value = Number(input.value) * 1.196e+6 
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'acres'){
        result.value = Number(input.value) * 247.1
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'hectares'){
        result.value = Number(input.value) * 100
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-miles'){
        result.value = Number(input.value) / 2.59
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-inches'){
        result.value = Number(input.value) * 1.55e+9
    }
    else if(inputTypeValue === 'square-kilometers' && resultTypeValue === 'square-kilometers'){
        result.value = input.value
    }

}