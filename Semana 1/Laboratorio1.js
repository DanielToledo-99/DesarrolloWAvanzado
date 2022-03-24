

//n = 0;
//x = 0;
//let mul = [];
//while (n<50){
//    if((x%7)==0 && (x%5)!=0 && (x%3)!=0 && (x%2)!=0 ){
//       mul.push(x);
//        n++;
//   }
//    x++;
//}
//console.log(mul);


//var num1;
//comision = 0;
//num1 = parseInt(prompt("Ingresa ventas",""));
//if (400>num1>150){
//    comision = num1*0.1;
//}
//else if (400<num1){
//    comision = num1*0.09 + 50;
//}
//else {
//    comision = 0;
//}
//console.log("La comision es "+comision);


//a = peliculas.length-1;
//while(a>-1){
    //if(peliculas[a].original_language == "en"){
        //console.log(peliculas[a].original_title);
    //}
   // a--;
//}


let array = [1,2,3,4,5];
var num1;
num1 = parseInt(prompt("Ingresa un numero: ",""));
while (num1>0){
    var eliminado = array.shift();
    array.push(eliminado);
    num1--;
} 
console.log(array);
document.write(array);