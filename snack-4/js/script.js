/*Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
 prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/


const firstArray =["a","b","c","d"];
const secondArray=["1","2","3","4"];

const newArray=[]


if (firstArray.length == secondArray.length){
    for (let i = 0; i < firstArray.length; i++) {
      newArray.push(firstArray[i]);
      newArray.push(secondArray[i]);
    }
  }

  console.log(newArray)
 
 