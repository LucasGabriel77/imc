let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', () =>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)

    console.log(nome, altura, idade, peso)

    const pessoa1 = new Pessoa()
    pessoa1.nome = nome
    pessoa1.idade = idade
    pessoa1.altura = altura 
    pessoa1.peso = peso 

    console.log(pessoa1)
 
    const pessoa2 = new Pessoa(nome,idade,peso,altura)
    
    console.log("*******")
    console.log(pessoa2)


}
)