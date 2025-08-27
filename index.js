function convert(){
    const input=parseFloat(document.getElementById("inputTemp").value);
    const from=document.getElementById("from").value;
    const to=document.getElementById("to").value;
    let result;

    if (from===to){
        result=input;
    }else if(from==="celsius"){
        if(to==="kelvin"){
            result=input+273.15;
        }
        if(to==="fahrenheit"){
            result = (input * 9/5) + 32;
        }
    }else if(from==="kelvin"){
        if(to==="celsius"){
            result=input-273.15;
        }
        if(to==="fahrenheit"){
            result = ((input - 273.15) * 9/5) + 32;
        }
    }else if(from==="fahrenheit"){
        if(to==="celsius"){
            result = (input - 32) * 5/9;
        }
        if(to==="kelvin"){
            result = ((input - 32) * 5/9) + 273.15;
        }
    }
    document.getElementById("result").textContent="result: "+result;
}