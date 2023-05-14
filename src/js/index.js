const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //busca id
const body = document.querySelector("body"); //consulta um seletor (busca tag, classe...)
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => { //função de seta
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); //("atributo que quer mudar, o caminho da novo atributo");
    }
});


/*===== REFATORANDO O CÓDIGO =====*/

/*
const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //busca id
const body = document.querySelector("body"); //consulta um seletor (busca tag, classe...)
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => { //função de seta
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");


body.classList.toggle("modo-escuro"); //ALTERNA ENTRE DOIS ESTADOS


    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); //("atributo que quer mudar, o caminho da novo atributo");
    }
});

*/