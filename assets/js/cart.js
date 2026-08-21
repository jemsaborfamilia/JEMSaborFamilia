let carrinho = [];

function abrirCarrinho(){
    document.getElementById("cart-sidebar").classList.add("active");
    document.getElementById("cart-overlay").classList.add("active");
}

function fecharCarrinho(){
    document.getElementById("cart-sidebar").classList.remove("active");
    document.getElementById("cart-overlay").classList.remove("active");
}

function adicionarCarrinho(id){

    const produto = produtos.find(p => p.id === id);

    if(!produto) return;

    carrinho.push(produto);

    renderCarrinho();

    abrirCarrinho(); // 🔥 ISSO FAZ O LATERAL ABRIR

}

function renderCarrinho(){

    const area = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    area.innerHTML = "";

    let total = 0;

    if(carrinho.length === 0){
        area.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalEl.innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach(item => {

        total += item.preco;

        area.innerHTML += `
            <div class="cart-item">
                <span>${item.nome}</span>
                <strong>R$ ${item.preco.toFixed(2).replace(".", ",")}</strong>
            </div>
        `;

    });

    totalEl.innerText = "R$ " + total.toFixed(2).replace(".", ",");

}