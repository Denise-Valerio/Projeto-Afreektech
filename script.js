console.log("Está Funcionando")
function calcular() {
  console.log("Está Clicando")

  var nota1 = document.getElementById("nota1").valueAsNumber
  console.log(nota1)
  
  var nota2 = document.getElementById("nota2").valueAsNumber
  console.log(nota2)

  var nota3 = document.getElementById("nota3").valueAsNumber
  console.log(nota3)

  var nota4 = document.getElementById("nota4").valueAsNumber
  console.log(nota4)

  var media = (nota1 + nota2 + nota3 + nota4)/4
  console.log(media)

  
  var status

  if (media >= 7)  {
    status = "Aprovação"
  }

  if (media >= 0 && media < 5) {
    status = "Reprovação"
  }

  if (media >= 5 && media < 7) {
    status = "Recuperação"
  }

  var resultado = document.getElementById("resultado")
  resultado.textContent = media + "-" + status
} 

