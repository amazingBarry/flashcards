export const getRandomIntFunc = (max) => (notThis = []) => {
    let retVal = getRand(max)
    while (notThis.includes(retVal)) {
      retVal = getRand(max)
    }
    return retVal
  }
  
  export const getRand = (max) => { return Math.floor(Math.random() * max) }
  
  export function shuffle(array) {
    const shuffledArray = [...array] // Create a shallow copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = getRand(i + 1);

      // Swap elements between the current index and the random index
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray
  }