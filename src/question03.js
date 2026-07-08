import leia from 'readline-sync'

var valorT = leia.questionFloat("Valor total da compra: ")
var pagamento = leia.keyInSelect(["dinheiro/pix", " cartão de débito", "cartão de crédito à vista", "cartão de crédito parcelado"],  "Qual forma de pagamento?")
  


if(pagamento === 0){
    var valorP = valorT * 0.12
    var desconto = valorT - valorP
    console.log("valor total da compra: " + desconto)


} else if(pagamento === 1){
    var valorP = valorT * 0.7
    var desconto = valorT - valorP
    console.log("valor total da compra: " + desconto)


}else if(pagamento === 2) {
    var valorP = valorT * 0.3
    var desconto = valorT - valorP
    console.log("valor total da compra: " + desconto)





  }  if(pagamento === 3){
    var parcela = leia.questionInt("Quantidade de parcelas ") }

    if(parcela < 6)   {
    

    var valorP = valorT * 0.3
    var acresimo = valorT + valorP

    console.log("Valor total da compra em + de 6x: " + acresimo)}
    else{
        console.log("Valor total da compra: " + valorT)
    }
