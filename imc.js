let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

class pessoa {
    constructor(nome,idade,peso,altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    } 
    calculaimc(){
        let peso = this.peso
        let altura = this.altura
        let resultado = peso / (altura * altura)

        return resultado
    }
}
