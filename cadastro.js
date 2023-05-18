const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem")
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const insenha = document.getElementById("insenha");

function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        let validar = dados.find(elemento => elemento.emailcliente==email);
        if (validar){
            msg.innerHTML="E-mail já existe!";
            evento.preventDefault();
        } else {
            criarUsuario(evento);
        }  
    }  
}

formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu nome";
        nome.focus();
        return null;
    }

    if (email.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu email";
        email.focus();
        return null;
    }

    if (senha.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite sua senha"
        senha.focus();
        return null;
    }
    
    if (insenha.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Insira a senha novamente"
        insenha.focus();
        return null;
    } 
    if(senha.value != insenha.value){
        evento.preventDefault();
        msg.innerHTML = "Senha incorreta,insira novamente!"
        insenha.focus();
        return null;
    } 
    verificarEmail(email.value, evento);
}

function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];
    dados.push(
        {
        nomecliente : nome.value,
        emailcliente : email.value,
        senhacliente : senha.value,
        insenhacliente : insenha.value
        }
    )
    localStorage.setItem("bd", JSON.stringify(dados));
    msg.innerHTML ="Usuário Cadastrado com Sucesso";
    evento.preventDefault();
    setTimeout(()=>{
    window.location.assign("login.html");
},2000)
}
