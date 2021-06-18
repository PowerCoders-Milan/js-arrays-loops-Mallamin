// define your function here
const multiplesOf = (number, limit) => {
    const multiples = []
    
    for (let i = 0; i <= limit; i++) {
        if (i % number === 0) {
           return multiples.push(i)
        }

    }
}
