import leia from "readline-sync"
 
var vitorias = leia.questionInt("Vitorias do time: ")
var empates = leia.questionInt("empates do time: ")
var derrotas = leia.questionInt("derrotas do time: ")
var pontos = leia.questionInt("pontos bonus do time: ")

var pontuacao = (vitorias * 3) + empates + pontos
if(pontos < 10){
    console.log("iniciante")
} else if(pontos >= 10 && pontos <= 24){
    console.log("competidor")
} else if(pontos >= 25 && pontos <= 39){
    console.log("avancado")
}else if(pontos >= 40 && pontos <= 59){
    console.log("elite")
}else if(pontos >=60 ){
    console.log("LENDA!")}