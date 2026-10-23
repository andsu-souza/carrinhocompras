import React from 'react';
import './ListaProdutos.css';

function ListaProdutos({ produtos, adicionarAoCarrinho }) {
    return (
        <section className="lista-produtos">
            <h2 className="titulo-secao">Produtos Disponíveis</h2>
            <div className="produtos-grid">
                {produtos.map((produto) => (
                    <div key={produto.id} className="produto-card">
                        <div className="produto-info">
                            <h3>{produto.nome}</h3>
                            <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
                        </div>
                        <button className="btn-adicionar" onClick={() => adicionarAoCarrinho(produto)}>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ListaProdutos;