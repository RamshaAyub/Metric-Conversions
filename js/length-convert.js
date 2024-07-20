// LENGTH CONVERTER


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

    if (inputTypeValue === 'inches' && resultTypeValue === 'millimeters'){
        result.value = Number(input.value) * 25.4
    }
    else if(inputTypeValue === 'inches' && resultTypeValue === 'feet'){
        result.value = Number(input.value) / 12
    }
    else if(inputTypeValue === 'inches' && resultTypeValue === 'meters'){
        result.value = Number(input.value) / 39.37
    }
    else if(inputTypeValue === 'inches' && resultTypeValue === 'yards'){
        result.value = Number(input.value) / 36
    }
    else if(inputTypeValue === 'inches' && resultTypeValue === 'miles'){
        result.value = Number(input.value) / 63360
    }
    else if(inputTypeValue === 'inches' && resultTypeValue === 'kilometers'){
        result.value = Number(input.value) / 39370
    }
    else if(inputTypeValue === 'inches' && resultTypeValue === 'inches'){
        result.value = input.value
    }


    // FROM MILLIMETERS

    if (inputTypeValue === 'millimeters' && resultTypeValue === 'inches'){
        result.value = Number(input.value) / 25.4
    }
    else if(inputTypeValue === 'millimeters' && resultTypeValue === 'feet'){
        result.value = Number(input.value) / 304.8
    }
    else if(inputTypeValue === 'millimeters' && resultTypeValue === 'meters'){
        result.value = Number(input.value) / 1000
    }
    else if(inputTypeValue === 'millimeters' && resultTypeValue === 'yards'){
        result.value = Number(input.value) / 914.4
    }
    else if(inputTypeValue === 'millimeters' && resultTypeValue === 'miles'){
        result.value = Number(input.value) / 1.609e+6
    }
    else if(inputTypeValue === 'millimeters' && resultTypeValue === 'kilometers'){
        result.value = Number(input.value)  / 1e+6
    }
    else if(inputTypeValue === 'millimeters' && resultTypeValue === 'millimeters'){
        result.value = input.value
    }


// FROM FEET

    if (inputTypeValue === 'feet' && resultTypeValue === 'inches'){
        result.value = Number(input.value) *12
    }
    else if(inputTypeValue === 'feet' && resultTypeValue === 'millimeters'){
        result.value = Number(input.value) * 304.8
    }
    else if(inputTypeValue === 'feet' && resultTypeValue === 'meters'){
        result.value = Number(input.value) / 3.281
    }
    else if(inputTypeValue === 'feet' && resultTypeValue === 'yards'){
        result.value = Number(input.value) / 3
    }
    else if(inputTypeValue === 'feet' && resultTypeValue === 'miles'){
        result.value = Number(input.value) / 5280
    }
    else if(inputTypeValue === 'feet' && resultTypeValue === 'kilometers'){
        result.value = Number(input.value)  / 3281
    }
    else if(inputTypeValue === 'feet' && resultTypeValue === 'feet'){
        result.value = input.value
    }




    // FROM METERS

    if (inputTypeValue === 'meters' && resultTypeValue === 'inches'){
        result.value = Number(input.value) * 39.37
    }
    else if(inputTypeValue === 'meters' && resultTypeValue === 'millimeters'){
        result.value = Number(input.value) * 1000
    }
    else if(inputTypeValue === 'meters' && resultTypeValue === 'feet'){
        result.value = Number(input.value) * 3.281
    }
    else if(inputTypeValue === 'meters' && resultTypeValue === 'yards'){
        result.value = Number(input.value) * 1.094
    }
    else if(inputTypeValue === 'meters' && resultTypeValue === 'miles'){
        result.value = Number(input.value) / 1609
    }
    else if(inputTypeValue === 'meters' && resultTypeValue === 'kilometers'){
        result.value = Number(input.value)  / 1000
    }
    else if(inputTypeValue === 'meters' && resultTypeValue === 'meters'){
        result.value = input.value
    }




    // FROM YARDS

    if (inputTypeValue === 'yards' && resultTypeValue === 'inches'){
        result.value = Number(input.value) * 36
    }
    else if(inputTypeValue === 'yards' && resultTypeValue === 'millimeters'){
        result.value = Number(input.value) * 914.4
    }
    else if(inputTypeValue === 'yards' && resultTypeValue === 'meters'){
        result.value = Number(input.value) / 1.094
    }
    else if(inputTypeValue === 'yards' && resultTypeValue === 'feet'){
        result.value = Number(input.value) * 3 
    }
    else if(inputTypeValue === 'yards' && resultTypeValue === 'miles'){
        result.value = Number(input.value) / 1760
    }
    else if(inputTypeValue === 'yards' && resultTypeValue === 'kilometers'){
        result.value = Number(input.value)  / 1094
    }
    else if(inputTypeValue === 'yards' && resultTypeValue === 'yards'){
        result.value = input.value
    }




    // FROM MILES

    if (inputTypeValue === 'miles' && resultTypeValue === 'inches'){
        result.value = Number(input.value) * 63360
    }
    else if(inputTypeValue === 'miles' && resultTypeValue === 'millimeters'){
        result.value = Number(input.value) * 1.609e+6
    }
    else if(inputTypeValue === 'miles' && resultTypeValue === 'meters'){
        result.value = Number(input.value) / 1609
    }
    else if(inputTypeValue === 'miles' && resultTypeValue === 'yards'){
        result.value = Number(input.value) * 1760
    }
    else if(inputTypeValue === 'miles' && resultTypeValue === 'feet'){
        result.value = Number(input.value) * 5280 
    }
    else if(inputTypeValue === 'miles' && resultTypeValue === 'kilometers'){
        result.value = Number(input.value)  * 1.609
    }
    else if(inputTypeValue === 'miles' && resultTypeValue === 'miles'){
        result.value = input.value
    }




    // FROM FEET

    if (inputTypeValue === 'kilometers' && resultTypeValue === 'inches'){
        result.value = Number(input.value) * 39370
    }
    else if(inputTypeValue === 'kilometers' && resultTypeValue === 'millimeters'){
        result.value = Number(input.value) * 1e+6
    }
    else if(inputTypeValue === 'kilometers' && resultTypeValue === 'meters'){
        result.value = Number(input.value) * 1000
    }
    else if(inputTypeValue === 'kilometers' && resultTypeValue === 'yards'){
        result.value = Number(input.value) * 1094 
    }
    else if(inputTypeValue === 'kilometers' && resultTypeValue === 'miles'){
        result.value = Number(input.value) / 1.609
    }
    else if(inputTypeValue === 'kilometers' && resultTypeValue === 'feet'){
        result.value = Number(input.value)  * 3281
    }
    else if(inputTypeValue === 'kilometers' && resultTypeValue === 'kilometers'){
        result.value = input.value
    }

}