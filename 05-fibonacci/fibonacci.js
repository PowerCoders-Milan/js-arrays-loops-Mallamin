// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random()*200);
let n1 = 0, n2 = 1, nextTerm;

const getFibonacciSequence=(maxNumber)=>{
  

  if (maxNumber===n2) 
  {
    return [n1, n2];
  } 
  else 
  {
    let nextTerm = getFibonacciSequence(maxNumber - n2);
    nextTerm.push(nextTerm[nextTerm.length - n2] + nextTerm[nextTerm.length - 2]);
    return nextTerm;
  }
};

 console.log(getFibonacciSequence(9));
 


