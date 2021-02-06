const span = document.querySelector('#result')

function convert () {
  const input = document.querySelector("#binary")
  
  if(input.value){
    const splitedValue = input.value.split('').map(x => Number(x))
    const isDecimal = splitedValue.find(x => x > 1)
    
    if (!isDecimal) {
      const binary = splitedValue.reverse()
      const binaryNumber = []
  
      for (i = 0 ; i < binary.length ; i++){
        binaryNumber.push(binary[i] * (2 ** i))
      }
      input.value = ""
      showResult(binaryNumber)
    }else {
    span.innerHTML = "Número Inválido, números binários são compostos apenas por 0 e 1"
    }
  }else {
    span.innerHTML = "Você deve digitar um valor antes de converter"
  }
}

function showResult (binaryNumber) {
  const result = binaryNumber.reduce((sum, value) => sum + value)
  span.innerHTML = `Resultado: ${result}`
}
