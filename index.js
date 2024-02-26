

function checkmath(num){
   if(num>0){
      console.log(num + " is a positive number");
   } else if (num<0){
      console.log(num + " is a negative number");
   } else if (num<=0){
      console.log(" It is a zero number ");
   }
    else{
      console.log(" It is not a number, it is string ");
   }
}

checkmath(0);


// function math (a,b){
//    return a+b
// }
// let result = math(3,5)
// console.log(result);


// Arrow function cannt declared after the console log.

let math = (a,b) => {
   return a * b
}
 result = math(2,2)
 console.log(result);

