import React from "react";


const App = () => {
  const ativoHook= React.useState(false)
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  console.log(ativoValor)

  function handleClick() {
    atualizaValor(!ativoValor)
  }
  return (
    <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>
  )
}

export default App