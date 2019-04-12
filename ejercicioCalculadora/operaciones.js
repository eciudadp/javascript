
var globalNum = 0;

function suma(primero, segundo){
    //var longitud=arguments.length;
    var resultado=0;
    for(let i=0; i< arguments.length; i++){
        resultado = resultado + arguments[i];
    }
    return resultado;
}


console.log("prueba de suma " + suma(1));
console.log("prueba de suma " + suma(2));
console.log("prueba de suma " + suma(3));

console.log("prueba de resta " + resta(5,2,2));
console.log("prueba de multiplicacion " + multiplicacion(2,5,2));
console.log("prueba de division " + division(10,2));

function resta(){
    var resultado=arguments[0];
    for(let i=1; i< arguments.length; i++){
        resultado = resultado - arguments[i];
    }
    return resultado;
}
function multiplicacion(){
    var resultado=arguments[0];
    for(let i=1; i< arguments.length; i++){
        resultado = resultado * arguments[i];
    }
    return resultado;
}

function division(primero, segundo){
    var resultado=primero/segundo;

    return resultado;
}


function sumaRara(){

    for(let i=0; i< arguments.length; i++){
        this.globalNum = this.globalNum + arguments[i];
    }
    return this.globalNum;
}
function restaRara(){
    this.globalNum = arguments[0] - this.globalNum;
    return this.globalNum;
}

function multiplicacionRara(){
    if(this.globalNum==0){
        this.globalNum=1;
    }
    
    this.globalNum = this.globalNum * arguments[0];
    
    return this.globalNum;
}
function divisionRara(){
    if(this.globalNum==0){
        this.globalNum=arguments[0];
    }
    this.globalNum = this.globalNum / arguments[0];
    return this.globalNum;
}
//console.log("prueba de suma " + sumaRara(1));
//console.log("prueba de suma " + sumaRara(2));
//console.log("prueba de suma " + sumaRara(3));
//console.log("prueba de suma " + sumaRara(10,100));
//console.log("prueba de resta " + restaRara(100));
//console.log("prueba de resta " + restaRara(25));
//console.log("prueba de resta " + restaRara(5));
//console.log("prueba de resta " + restaRara(10));
console.log("prueba de multiplicacion " + divisionRara(1500));
console.log("prueba de multiplicacion " + divisionRara(2));
console.log("prueba de multiplicacion " + divisionRara(2));
console.log("prueba de multiplicacion " + divisionRara(2));