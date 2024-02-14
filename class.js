let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', () =>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)

    console.log(nome, altura, idade, peso)

    const pessoa1 = new Pessoa(nome ,idade ,peso ,altura)

    console.log(pessoa1)

    let imc = pessoa1.calculaimc()
    console.log(imc)

    resposta.innerHTML = `o cliente ${pessoa1.nome} <br>`
    resposta.innerHTML += `Tem ${pessoa1.idade} anos <br>`
    resposta.innerHTML += `com peso de ${pessoa1.peso}KG, e altura de ${pessoa1.altura}m <br>`
    resposta.innerHTML += `tem Imc de ${imc}`


}
)