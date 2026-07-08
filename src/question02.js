import leia from 'readline-sync'

var n1 = leia.questionFloat("Primeira nota do aluno: ")
var n2 =  leia.questionFloat("Segunda nota do aluno: ")
var faltas = leia.questionInt("Faltas do aluno: ")
var aula = 200
 
var AULAfreq = aula - faltas
var freq = (AULAfreq/aula) * 100

var media =( n1 + n2 ) /2

if(media >= 7 && freq >= 75){
    console.log("aprovado")
} else if(media < 7 && freq > 75){
    console.log("reprovado por nota")
} else if(media >= 7 && freq < 75){
    console.log("reprovado por falta")
}
