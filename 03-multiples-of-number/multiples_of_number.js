// define your function here


const multiplesOf=(number, limit)=> {
    let multiples = []
  
    for (let i = 0; i <limit; i++) {
      if (i % number === 0) {
        multiples.push(i);
      }
    }
  
    return multiples

   
  }
const multiplesOfTwo= multiplesOf(2,200)
  console.log(multiplesOfTwo);
