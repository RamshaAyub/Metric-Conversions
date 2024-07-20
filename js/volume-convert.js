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

    // FROM  FLUID OUNCES

    if (inputTypeValue === 'fluid-ounces' && resultTypeValue === 'milliliters'){
        result.value = Number(input.value) * 29.574
    }
    else if(inputTypeValue === 'fluid-ounces' && resultTypeValue === 'gallons'){
        result.value = Number(input.value) / 128
    }
    else if(inputTypeValue === 'fluid-ounces' && resultTypeValue === 'liters'){
        result.value = Number(input.value) / 33.814
    }
    else if(inputTypeValue === 'fluid-ounces' && resultTypeValue === 'cubic-feet'){
        result.value = Number(input.value) / 957.5
    }
    else if(inputTypeValue === 'fluid-ounces' && resultTypeValue === 'cubic-meters'){
        result.value = Number(input.value) / 33810
    }
    else if(inputTypeValue === 'fluid-ounces' && resultTypeValue === 'cubic-yards'){
        result.value = Number(input.value) / 25850
    }
    else if(inputTypeValue === 'fluid-ounces' && resultTypeValue === 'fluid-ounces'){
        result.value = input.value
    }





     // FROM  MILLILITERS

    if (inputTypeValue === 'milliliters' && resultTypeValue === 'fluid-ounces'){
        result.value = Number(input.value) / 29.574
    }
    else if(inputTypeValue === 'milliliters' && resultTypeValue === 'gallons'){
        result.value = Number(input.value) / 3785
    }
    else if(inputTypeValue === 'milliliters' && resultTypeValue === 'liters'){
        result.value = Number(input.value) / 1000
    }
    else if(inputTypeValue === 'milliliters' && resultTypeValue === 'cubic-feet'){
        result.value = Number(input.value) / 28320
    }
    else if(inputTypeValue === 'milliliters' && resultTypeValue === 'cubic-meters'){
        result.value = Number(input.value) / 1e+6
    }
    else if(inputTypeValue === 'milliliters' && resultTypeValue === 'cubic-yards'){
        result.value = Number(input.value) / 764600
    }
    else if(inputTypeValue === 'milliliters' && resultTypeValue === 'milliliters'){
        result.value = input.value
    }





     // FROM  GALLONS

    if (inputTypeValue === 'gallons' && resultTypeValue === 'milliliters'){
        result.value = Number(input.value) * 3785
    }
    else if(inputTypeValue === 'gallons' && resultTypeValue === 'fluid-ounces'){
        result.value = Number(input.value) * 128
    }
    else if(inputTypeValue === 'gallons' && resultTypeValue === 'liters'){
        result.value = Number(input.value) * 3.785
    }
    else if(inputTypeValue === 'gallons' && resultTypeValue === 'cubic-feet'){
        result.value = Number(input.value) / 7.48
    }
    else if(inputTypeValue === 'gallons' && resultTypeValue === 'cubic-meters'){
        result.value = Number(input.value) / 264.2
    }
    else if(inputTypeValue === 'gallons' && resultTypeValue === 'cubic-yards'){
        result.value = Number(input.value) / 202
    }
    else if(inputTypeValue === 'gallons' && resultTypeValue === 'gallons'){
        result.value = input.value
    }





     // FROM  LITERS

    if (inputTypeValue === 'liters' && resultTypeValue === 'milliliters'){
        result.value = Number(input.value) / 1000
    }
    else if(inputTypeValue === 'liters' && resultTypeValue === 'gallons'){
        result.value = Number(input.value) / 3.785
    }
    else if(inputTypeValue === 'liters' && resultTypeValue === 'fluid-ounces'){
        result.value = Number(input.value) * 33.814
    }
    else if(inputTypeValue === 'liters' && resultTypeValue === 'cubic-feet'){
        result.value = Number(input.value) / 28.317
    }
    else if(inputTypeValue === 'liters' && resultTypeValue === 'cubic-meters'){
        result.value = Number(input.value) / 1000
    }
    else if(inputTypeValue === 'liters' && resultTypeValue === 'cubic-yards'){
        result.value = Number(input.value) / 764.6
    }
    else if(inputTypeValue === 'liters' && resultTypeValue === 'liters'){
        result.value = input.value
    }




    
     // FROM  CUBIC FEET

    if (inputTypeValue === 'cubic-feet' && resultTypeValue === 'milliliters'){
        result.value = Number(input.value) * 28320
    }
    else if(inputTypeValue === 'cubic-feet' && resultTypeValue === 'gallons'){
        result.value = Number(input.value) * 7.481
    }
    else if(inputTypeValue === 'cubic-feet' && resultTypeValue === 'liters'){
        result.value = Number(input.value) * 28.317
    }
    else if(inputTypeValue === 'cubic-feet' && resultTypeValue === 'fluid-ounces'){
        result.value = Number(input.value) * 957.5 
    }
    else if(inputTypeValue === 'cubic-feet' && resultTypeValue === 'cubic-meters'){
        result.value = Number(input.value) / 35.315
    }
    else if(inputTypeValue === 'cubic-feet' && resultTypeValue === 'cubic-yards'){
        result.value = Number(input.value) / 27
    }
    else if(inputTypeValue === 'cubic-feet' && resultTypeValue === 'cubic-feet'){
        result.value = input.value
    }






     // FROM  CUBIC METERS

    if (inputTypeValue === 'cubic-meters' && resultTypeValue === 'milliliters'){
        result.value = Number(input.value) * 1e+6
    }
    else if(inputTypeValue === 'cubic-meters' && resultTypeValue === 'gallons'){
        result.value = Number(input.value) * 264.2
    }
    else if(inputTypeValue === 'cubic-meters' && resultTypeValue === 'liters'){
        result.value = Number(input.value) * 1000
    }
    else if(inputTypeValue === 'cubic-meters' && resultTypeValue === 'cubic-feet'){
        result.value = Number(input.value) * 35.315 
    }
    else if(inputTypeValue === 'cubic-meters' && resultTypeValue === 'fluid-ounces'){
        result.value = Number(input.value) * 33810 
    }
    else if(inputTypeValue === 'cubic-meters' && resultTypeValue === 'cubic-yards'){
        result.value = Number(input.value) * 1.308 
    }
    else if(inputTypeValue === 'cubic-meters' && resultTypeValue === 'cubic-meters'){
        result.value = input.value
    }





     // FROM  CUBIC YARDS

    if (inputTypeValue === 'cubic-yards' && resultTypeValue === 'milliliters'){
        result.value = Number(input.value) * 764600
    }
    else if(inputTypeValue === 'cubic-yards' && resultTypeValue === 'gallons'){
        result.value = Number(input.value) * 202 
    }
    else if(inputTypeValue === 'cubic-yards' && resultTypeValue === 'liters'){
        result.value = Number(input.value) * 764.6 
    }
    else if(inputTypeValue === 'cubic-yards' && resultTypeValue === 'cubic-feet'){
        result.value = Number(input.value) * 764.6 
    }
    else if(inputTypeValue === 'cubic-yards' && resultTypeValue === 'cubic-meters'){
        result.value = Number(input.value) / 1.308
    }
    else if(inputTypeValue === 'cubic-yards' && resultTypeValue === 'fluid-ounces'){
        result.value = Number(input.value) * 25850 
    }
    else if(inputTypeValue === 'cubic-yards' && resultTypeValue === 'cubic-yards'){
        result.value = input.value
    }



}