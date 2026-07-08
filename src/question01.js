import leia from 'readline-sync'

var diasAlug = leia.questionInt("Quantos dias o carro foi alugado: ")
var km = leia.questionInt("Km percorrido: ")
var escolha = leia.keyInSelect(["POPULAR", "INTERMEDIARIO", "LUXO"], "tipo de carro escolhido")




if (escolha === 0) {
    var sm = diasAlug * 90
    var smKM = km * 0.25

    console.log("VALOR DA DIARIA: " + sm + " E VALOR DOS KM RODADOS: " + smKM)
} else if (escolha === 1) {
    var sm2 = diasAlug * 140
    var smKM2 = km * 0.40

    console.log("VALOR DA DIARIA: " + sm2 + "  E VALOR DOS KM RODADOS: " + smKM2)
} else if (escolha === 2) {
    var sm3 = diasAlug * 220
    var smKM3 = km * 0.70

    console.log("VALOR DA DIARIA: " + sm3 + "R$ E VALOR DOS KM RODADOS: " + smKM3)
} 



if (diasAlug >= 7) 
    var valorT = sm + smKM
    var valorT1 = sm2 + smKM2
    var valorT2 = sm3 + smKM3

    var desconto1 = valorT * 0.10
    var desconto2 = valorT1 * 0.10
    var desconto3 = valorT2 * 0.10
    
   console.log("desconto " + desconto1)
   console.log("desconto " + desconto2)
   console.log("desconto " + desconto3)