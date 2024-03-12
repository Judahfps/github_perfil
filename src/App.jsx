import { useState } from "react";

import Perfil from "./compenets/Perfil";
import Formulario from "./compenets/Formulario.index";
import ReposList from "./compenets/ReposList";


function App() {
  const [FormularioEstarVisivel, setFormularioEstarVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  function RetornaNome() {
    return nome;

  }

  return (
    <>
      <input type="text" placeholder="Digite o nome de usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>

          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />

        </>
      )}

      {/* {FormularioEstarVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFormularioEstarVisivel(!FormularioEstarVisivel)} type="button">toggle form</button> */}
    </>

  )
}

export default App
