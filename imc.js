class Pessoa{
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

        return resultado.toFixed(2)
    }
    classificaimc(){
        let imcResultado = this.calculaimc
        console.log(imcResultado)
    }
}
