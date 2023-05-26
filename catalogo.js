const cards = document.querySelector(".cards");

carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if (dados === null){
       divcard.innerHTML = "<p> Nenhum item encontrado </p>";
       cards.appendChild(divcard);
       return null;
    }

dados.forEach((elemento, indice) => {
    let divcard = document.createElement("div");
    divcard.setAttribute("class", "card");
    divcard.innerHTML = `<div class="info">
    <img src="imagens/lapis.png" onclick="editar(${indice})" alt="">
    <img src="imagens/lixo.png" onclick="excluir(${indice})" alt="">
</div>

<div class="cardimg">
<img src="img/${elemento.foto}" alt="">
</div>
    
    `
    cards.appendChild(divcard);
});
}

function excluir(indice){
    if (confirm("Tem certeza de que deseja excluir?")) {
        let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    window.location.reload();
    }
}

function editar(indice){
    var url ="itens.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}