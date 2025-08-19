const lanches = [
    { id: 1, Lanche: "Hambúrger simples", Preco: "R$15,00" },
    { id: 2, Lanche: "X-burger", Preco: "R$18,00" },
    { id: 3, Lanche: "X-Salada", Preco: "R$20,00" },
    { id: 4, Lanche: "Cheeseburger Bacon", Preco: "R$22,00" }
];

const porcoes = [
    { id: 1, Porcao: "Batata Frita Pequena", Preco: "R$10,00" },
    { id: 2, Porcao: "Batata Frita Grande", Preco: "R$16,00" },
    { id: 3, Porcao: "Nuggets", Preco: "R$12,00" }
];

const bebidas = [
    { id: 1, Bebida: "Refrigerante Lata", Preco: "R$6,00" },
    { id: 2, Bebida: "Suco Natural", Preco: "R$8,00" },
    { id: 3, Bebida: "Água Mineral", Preco: "R$4,00" }
];

const sobremesas = [
    { id: 1, Sobremesa: "Pudim", Preco: "R$7,00" },
    { id: 2, Sobremesa: "Bolo de Chocolate", Preco: "R$9,00" },
    { id: 3, Sobremesa: "Sorvete", Preco: "R$6,00" }
];

// Salva todas as listas na sessão
sessionStorage.setItem("lanches", JSON.stringify(lanches));
sessionStorage.setItem("porcoes", JSON.stringify(porcoes));
sessionStorage.setItem("bebidas", JSON.stringify(bebidas));
sessionStorage.setItem("sobremesas", JSON.stringify(sobremesas));

// Função chamada ao clicar num produto
function escolherProduto(categoria, id) {
    sessionStorage.setItem("categoriaEscolhida", categoria);
    sessionStorage.setItem("produtoEscolhido", id);
    window.location.href = "produto.html";
}
