import React from 'react';
import './Carrinho.css';

function Carrinho({ itens, removerDoCarrinho }) {
    const valorTotal = itens.reduce((total, item) => total + item.preco * item.quantidade, 0);

    return (
        <aside className="carrinho">
            <h2 className="titulo-carrinho">Seu Carrinho</h2>

            {itens.length === 0 ? (
                <p className="carrinho-vazio">O carrinho está vazio no momento.</p>
            ) : (
                <ul className="carrinho-lista">
                    {itens.map((item) => (
                        <li key={item.id} className="carrinho-item">
                            <div className="item-detalhes">
                                <span className="item-nome">{item.nome}</span>
                                <span className="item-preco">
                                    {item.quantidade}x R$ {item.preco.toFixed(2)}
                                </span>
                            </div>
                            <button className="btn-remover" onClick={() => removerDoCarrinho(item.id)}>
                                -
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="carrinho-total">
                <h3>Total:</h3>
                <h3>R$ {valorTotal.toFixed(2)}</h3>
            </div>
        </aside>
    );
}

export default Carrinho;