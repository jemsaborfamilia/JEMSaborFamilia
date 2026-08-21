let produtos = [];

document.addEventListener("DOMContentLoaded", async () => {

    const res = await fetch("data/products.json");
    produtos = await res.json();

    renderProdutos();

});

function renderProdutos() {

    const container = document.getElementById("products");

    container.innerHTML = "";

    produtos.forEach(p => {

        const card = document.createElement("div");
        card.className = "product-card";

card.innerHTML = `

<div class="badge">
🔥 Mais vendido
</div>

<div class="product-image"
style="background-image:url('${produto.imagem}')">
</div>

<div class="product-info">

<div class="product-name">
${produto.nome}
</div>

<div class="product-description">
${produto.descricao}
</div>

<div class="product-rating">
⭐ 5.0 • 130 avaliações
</div>

<div class="product-footer">

<div class="product-price">
R$ ${produto.preco.toFixed(2).replace(".",",")}
</div>

</div>

`;

        container.appendChild(card);

    });

}
let categoriaAtual = "Todos";

function renderProdutos() {

    const container = document.getElementById("products");

    container.innerHTML = "";

    const lista = categoriaAtual === "Todos"
        ? produtos
        : produtos.filter(p => p.categoria === categoriaAtual);

    lista.forEach(produto => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image"
                style="background-image:url('${produto.imagem}')">
            </div>

            <div class="product-info">

                <div class="product-name">${produto.nome}</div>

                <div class="product-description">${produto.descricao}</div>

                <div class="product-price">
                    R$ ${produto.preco.toFixed(2).replace(".", ",")}
                </div>

            </div>
        `;

        container.appendChild(card);

    });

}
document.querySelectorAll(".category").forEach(botao=>{

    botao.addEventListener("click",()=>{

        document.querySelectorAll(".category")
        .forEach(b=>b.classList.remove("active"));

        botao.classList.add("active");

        categoriaAtual = botao.dataset.category;

        renderProdutos();

    });

});
let textoPesquisa = "";

let lista = produtos;

if(categoriaAtual !== "Todos"){

    lista = lista.filter(p=>p.categoria===categoriaAtual);

}

if(textoPesquisa !== ""){

    lista = lista.filter(p=>

        p.nome.toLowerCase().includes(textoPesquisa)

    );

}
document.getElementById("search").addEventListener("input",(e)=>{

    textoPesquisa = e.target.value.toLowerCase();

    renderProdutos();

});