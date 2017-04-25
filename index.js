function theBeatlesPlay(musicians, instruments){
  // create an empty array stored in a variable
  // contain a for loop which loops over the array of musicians
  const arr = []

  for (let i = 0, l = musicians.length; i<l; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}


function johnLennonFacts(facts){
  // array will contain john lennon facts
  const shoutedFacts = []
  let i=0
  while (i < facts.length){
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
};

function iLoveTheBeatles(n) {
  const arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while(n<15);
  return arr
}
