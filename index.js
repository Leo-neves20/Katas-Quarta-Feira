// TAREFA 1

function oneThroughTwenty(){

   let contador = []
    
    for(let contagem = 0; contagem <= 20; contagem++){

       contador.push(contagem)

    }

    return contador

}


console.log(oneThroughTwenty())
 
//TAREFA 2

function evensToTwenty(){

   let contPar = []

   for(let contadorPar = 0; contadorPar <= 20 ; contadorPar += 2 ){
      
       contPar.push(contadorPar)

   }

  return contPar

}

console.log(evensToTwenty())

//TAREFA 3

function oddsToTwenty(){

   let contImpar = []

   for(let contadorImpar = 0; contadorImpar <= 20; contadorImpar++){

       if(contadorImpar %2 == 1){

          contImpar.push(contadorImpar)

      }
   }

   return contImpar

}

console.log(oddsToTwenty())

//TAREFA 4

function multiplesOfFive(){

   let contMultiplicar = []

   for(let contadorMultiplicador = 0; contadorMultiplicador <= 100; contadorMultiplicador += 5 ){

       contMultiplicar.push(contadorMultiplicador)

   }

   return contMultiplicar
}

console.log(multiplesOfFive())

//TAREFA 5

 function squareNumbers(){

   let contQuadrado = []

   for(let quadrado = 1; quadrado <= 10;quadrado++){

      contQuadrado.push(quadrado * quadrado)
      
   }

   return contQuadrado

}

 console.log(squareNumbers()) 

//TAREFA 6

function countingBackwards(){

   let contTras = []
    
   for(let contagemTras = 20; contagemTras >= 0; contagemTras--) {

      contTras.push(contagemTras)

   }

   return contTras

}

console.log(countingBackwards())

//TAREFA 7

function evenNumbersBackwards(){

   let contTrasPar = []
    
   for(let contagemTrasPar = 20; contagemTrasPar >= 0; contagemTrasPar -= 2) {

      contTrasPar.push(contagemTrasPar)

   }

   return contTrasPar

}

console.log(evenNumbersBackwards())

//TAREFA 8

function oddNumbersBackwards(){

   let contTrasImpar = []

   for(let contadorTrasImpar = 20; contadorTrasImpar >= 0; contadorTrasImpar--){

       if (contadorTrasImpar % 2 == 1){

          contTrasImpar.push(contadorTrasImpar)

      }
   }

   return contTrasImpar

}

console.log(oddNumbersBackwards())

//TAREFA 9

function multiplesOfFiveBackwards(){

   let contTrasSubtracao = []

   for(let contadorTrasSubtracao = 100; contadorTrasSubtracao >= 0; contadorTrasSubtracao -= 5 ){

      contTrasSubtracao.push(contadorTrasSubtracao)

   }

   return contTrasSubtracao
}

console.log(multiplesOfFiveBackwards())

//TAREFA 10

function squareNumbersBackwards(){

   let contQuadradoTras = []

   for(let quadradoTras = 10; quadradoTras >= 1; quadradoTras--){

      contQuadradoTras.push(quadradoTras * quadradoTras)
      
   }

   return contQuadradoTras

}

console.log(squareNumbersBackwards())



