let value = 0

function increment() {
  changeValue(value + 1)
}

function decrement() {
  changeValue(value - 1)
}

function changeValue(newValue) {
  value = newValue

  const valueNode = document.getElementById('value')

  const isPair = value % 2 === 0

  // @TODO Desafio: transformar em vermelho se for número negativo

  if (isPair) {
    valueNode.classList.remove('value_odd')
    valueNode.classList.add('value_pair')
  }
  else {
    valueNode.classList.remove('value_pair')
    valueNode.classList.add('value_odd')
  }

  valueNode.innerText = value
}

document.addEventListener('onload', function () { changeValue(0) })
