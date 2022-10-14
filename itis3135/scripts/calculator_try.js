window.onload = function () 
{

    document.getElementById("b1").onclick = number;
    document.getElementById("b2").onclick = number;
    document.getElementById("b3").onclick = number;
    document.getElementById("b4").onclick = number;
    document.getElementById("b5").onclick = number;
    document.getElementById("b6").onclick = number;
    document.getElementById("b7").onclick = number;
    document.getElementById("b8").onclick = number;
    document.getElementById("b9").onclick = number;
    document.getElementById("b0").onclick = number;

    document.getElementById("add").onclick = add;
    document.getElementById("minus").onclick = minus;
    document.getElementById("multiply").onclick = multiply;
    document.getElementById("divide").onclick = divide;
    document.getElementById("decimal").onclick = number;
    document.getElementById("clear").onclick = clear;
    document.getElementById("equal").onclick = equal;

};

function number() 
{
    document.calc.txtNumber.value += this.value;
}
      
function add() 
{
    var input = parseFloat(document.calc.txtNumber.value);
        prevCalc = input;
        document.calc.txtNumber.value = "";
        return "add";
}

function minus() 
{
    var input = parseFloat(document.calc.txtNumber.value);
    prevCalc = input;
    document.calc.txtNumber.value = "";
    return "minus";
}

function multiply() 
{
    var input = parseFloat(document.calc.txtNumber.value);
    prevCalc = input;
    document.calc.txtNumber.value = "";
    return "multiply";
}

function divide() 
{
    var input = parseFloat(document.calc.txtNumber.value);
        prevCalc = input;
        document.calc.txtNumber.value = "";
        return "divide";
}
