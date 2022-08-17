function oneThroughTwenty() {
   let retorno = [];
   for(let i = 1; i <21; i++){
    retorno.push(i);
   } 
   return retorno;
    
}
console.log(oneThroughTwenty());

function evensToTwenty() {
   let retorno = [];  
   for(let i = 0; i <21; i++){
      if(i % 2 == 0){
        retorno.push(i);
      }
   }
  return retorno;
}
console.log(evensToTwenty());

function oddsToTwenty() {  
  let retorno = [];  
   for(let i = 0; i <21; i++){
      if(i % 2 !== 0){
        retorno.push(i);
      }
   }
  return retorno;
}
console.log(oddsToTwenty());

function multiplesOfFive() {
  let retorno = [];  
    for(let i = 1; i <101; i++){
      if(i % 5 == 0){
        retorno.push(i);
      }
    }
  return retorno;
}
console.log(multiplesOfFive());

function squareNumbers() {
  let retorno = [];
  for(let i=1; i<11; i++){
    retorno.push(i*i);
  }
  return retorno;
}
console.log(squareNumbers());

function countingBackwards() {
  let retorno = [];  
  for(let i = 20; i >0; i--){
    retorno.push(i);
  }
 return retorno;
}
console.log(countingBackwards());

function evenNumbersBackwards() {
  let retorno = [];  
  for(let i = 20; i >0; i--){
     if(i % 2 == 0){
       retorno.push(i);
     }
  }
 return retorno;
}
console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let retorno = [];  
  for(let i = 20; i >0; i--){
     if(i % 2 !== 0){
       retorno.push(i);
     }
  }
 return retorno;
}
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let retorno = [];  
   for(let i = 100; i >1; i--){
      if(i % 5 == 0){
        retorno.push(i);
      }
   }
  return retorno;
}
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let retorno = [];
  for(let i=10; i>0; i--){
    retorno.push(i*i);
  }
  return retorno;
}
console.log(squareNumbersBackwards());
