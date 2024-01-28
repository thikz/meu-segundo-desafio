saldoRanqueadas()

function saldoRanqueadas(){
    var vitorias = 150
    var derrotas = 2
    resultado = vitorias - derrotas
    return resultado
}
 function nivelDoHeroi(){
    var nivel = saldoRanqueadas()
    var nivelHeroi
    if(nivel < 10) {
        nivelHeroi = "Ferro"
    } else if(nivel <= 20){
        nivelHeroi = "Bronze"
    } else if(nivel <= 50){
        nivelHeroi = "Prata"
    } else if(nivel <= 80){
        nivelHeroi = "Ouro"
    } else if(nivel <= 90){
        nivelHeroi = "Diamante"
    } else if(nivel <= 100){
        nivelHeroi = "Lendario"
    } else {
        nivelHeroi = "Imortal"
    }
    console.log("O Herói tem saldo de " + saldoRanqueadas() + " e está no nível de " + nivelHeroi + ".") 
}
nivelDoHeroi()