
/*async function makeCalculationAndSendStuffToBackend() {
    return 'hello world'
  }
  makeCalculationAndSendStuffToBackend().then(msg => console.log(msg))


function makeCalculationAndSendStuffToBackend() {    
    let p = new Promise((resolve, reject) => resolve("hello world"))
    return p
 }
 makeCalculationAndSendStuffToBackend().then(msg => console.log(msg))*/


function makeCalculation (a, b) {
    function asynFunc (resolve, reject) {
      if (b === 0) {
        reject('cannot divide with zero.')
      } else {
        setTimeout(() => {
          console.log('calculating stuff')
          const division = a / b
          resolve(division)  
        }, 1000)
      }
    }
    const p = new Promise(asynFunc)
    return p
  }

  makeCalculation(10, 2).then((result) => console.log(result))

/*async function makeCalculationAndSendStuffToBackend() {
    // 1) make calculation
    const result = await makeCalculation(10, 2)
    console.log(result)
    // 2) send stuff to backend
  
    // 3) inform that this is done
    return 'done'
  }
  makeCalculationAndSendStuffToBackend().then(msg => console.log(msg))*/
  

async function makeCalculationAndSendStuffToBackend() {
    // 1) make calculation
    const result = await makeCalculation(10, 2)
    // 2) send stuff to backend
    const msg = await sendStuffToBackend(result)
    // 3) inform that this is done
    return msg;
  }

  makeCalculationAndSendStuffToBackend().then(msg => console.log(msg));