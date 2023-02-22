import React from "react";


const luana = {
  cliente: 'Luana',
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'SmartPhone', preco: 'R$ 1500'},
  ],
  situacao: true
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'SmartPhone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'}
  ],
  situacao: false
}
const App = () => {
  
  const dados = mario;

  const total = dados.compras.map(item => Number(item.preco.replace('R$',""))).reduce((a,b) => a+b)
  

  return <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>
      Situação:<span style={{color: dados.situacao ? 'green' : 'red'}}>{dados.situacao ? 'Ativa' : 'Inativa'}</span> 
    
    </p>
    <p>Total: R${total}</p>
    {total > 10000 && <p>Você está gastando muito</p>}
  </div> 
          
}

export default App