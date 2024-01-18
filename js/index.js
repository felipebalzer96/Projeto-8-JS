let buttonCadastro = document.getElementById('avancarCadastro')

let nome = document.getElementById('nome');
let original = document.getElementById('original');
let diretor = document.getElementById('diretor');
let data = document.getElementById('data');

nome.addEventListener('change' , () =>{
if(nome.value.length > 0){
    nome.style.backgroundColor = 'withe'
}
})

original.addEventListener('change' , () =>{
    if(original.value.length > 0){
        original.style.backgroundColor = 'withe'
}
})
    
diretor.addEventListener('change' , () =>{
        if(diretor.value.length > 0){
            diretor.style.backgroundColor = 'withe'
}
})

data.addEventListener('change' , () =>{
    if(data.value.length > 0){
        data.style.backgroundColor = 'withe'
    }
    })



function validarCampos(){
let nome = document.getElementById('nome');
let original = document.getElementById('original');
let diretor = document.getElementById('diretor');
let data = document.getElementById('data');
let classificacao = document.querySelector('input'[name ="classificacao"]: 'cheked' )
let termos = document.getElementById('autorizacao')

if(nome.value ==""){
    alert(" Campo Nome do Filme no Brasil é obrigatorio")
    nome.style.backgroundColor = 'blue'
    return
}
if(original.value ==""){
    alert("Campo Nome original do filme é obrigatorio")
    original.style.backgroundColor = 'blue'
    return
}
if(diretor.value == ""){
    alert("Campo nome do diretor é obrigatorio")
    diretor.style.backgroundColor = 'blue'
    return
}
if(data.value == ""){
    alert("Campo data é obrigatorio")
    data.style.backgroundColor = 'blue'
    return
}
if (!autorizacao.cheked){
    alert("É necessrio aceitar os termos de uso")
    return

}
alert("Seu cadastro foi concluido com sucesso")
}



