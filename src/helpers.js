export const getRandomIntFunc = (max) => (notThis = []) => {
    let retVal = getRand(max)
    while (notThis.find((a) => a == retVal)) {
      retVal = getRand(max)
    }
    return retVal
  }
  
  export const getRand = (max) => { return Math.floor(Math.random() * max) }
  
  export function shuffle(array) {
    let outArray = []
    let inArray = [...array]

    while(inArray.length>0) {
        const rand = getRand(inArray.length)
        outArray.push(inArray[rand])
        inArray.splice(rand,1)
    }
    return outArray

    // let currentIndex = array.length,  randomIndex;
    // console.log('cur', currentIndex)
  
    // // While there remain elements to shuffle.
    // while (currentIndex != 0) {
  
    //   // Pick a remaining element.
    //   randomIndex = getRand(currentIndex);
    //   currentIndex--;
    //   console.log(array[currentIndex], array[randomIndex]);

    //   // And swap it with the current element.
    //   [array[currentIndex], array[randomIndex]] = [
    //     array[randomIndex], array[currentIndex]];
    // }

    // console.log('ar',array)
  
    // return array;
  }