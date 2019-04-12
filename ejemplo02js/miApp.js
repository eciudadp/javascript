console.log("Hello world")
variablesGlobales = "variableGlobal";
var irAlVar = "otra variable global";
miFuncionVar()
miFuncionLet()


function miFuncionVar(){
    var otraVariable ="Esto es otra variable global";
    for(var i =0;i<10;i++){
        console.log("muestra i "+i);
    }
    console.log("i= "+ i);
}

function miFuncionLet(){
    var otraVariable ="Esto es otra variable global";
    for(let i =0;i<10;i++){
        console.log("muestra i "+i);
    }
    console.log("i= "+ i);
}