import React, { useState } from 'react';
import ListaProdutos from './Componente/ListaProdutos/ListaProdutos';
import Carrinho from './Componente/Carrinho/Carrinho';
import './App.css';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const produtosDisponiveis = [
    { id: 1, nome: 'Teclado Mecânico RGB', preco: 350.0 },
    { id: 2, nome: 'Mouse Gamer Sem Fio', preco: 180.0 },
    { id: 3, nome: 'Monitor IPS 24"', preco: 850.0 },
    { id: 4, nome: 'Headset 7.1 Surround', preco: 220.0 },
    { id: 5, nome: 'SSD NVMe 1TB', preco: 400.0 },
    { id: 6, nome: 'Memória RAM 16GB DDR4', preco: 250.0 },
    { id: 7, nome: 'Placa de Vídeo RTX 4060', preco: 1850.0 },
    { id: 8, nome: 'Processador Ryzen 5', preco: 950.0 },
    { id: 9, nome: 'Cadeira Ergonômica', preco: 1100.0 }
  ];

  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find((item) => item.id === produto.id);
    if (itemExistente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produtoId) => {
    const itemExistente = carrinho.find((item) => item.id === produtoId);
    if (itemExistente.quantidade === 1) {
      setCarrinho(carrinho.filter((item) => item.id !== produtoId));
    } else {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
        )
      );
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Loja de Informática</h1>
      </header>
      <main className="app-main">
        <ListaProdutos produtos={produtosDisponiveis} adicionarAoCarrinho={adicionarAoCarrinho} />
        <Carrinho itens={carrinho} removerDoCarrinho={removerDoCarrinho} />
      </main>
    </div>
  );
}

export default App;