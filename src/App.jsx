import { useState } from 'react'

import './App.css'
import GatoCard from './Components/GatoCard/GatoCard'

import gatos from './Data/gatos.js'

function App() {
  // const [count, setCount] = useState(0)

 const [listaGatos, setListaGatos] = useState([
    {nome: "Gato Formal", descricaoGato: gatos["Formal"].descricaoGato, caminhoImagem: gatos["Formal"].imagem},
    {nome: "Gato Explosão", descricaoGato: gatos["Explosao"].descricaoGato, caminhoImagem: gatos["Explosao"].imagem},
    {nome: "Gato Café", descricaoGato: gatos["Cafe"].descricaoGato, caminhoImagem: gatos["Cafe"].imagem},
    {nome: "Gato Rindo", descricaoGato: gatos["Rindo"].descricaoGato, caminhoImagem: gatos["Rindo"].imagem},
    {nome: "Gato Bravo", descricaoGato: gatos["Bravo"].descricaoGato, caminhoImagem: gatos["Bravo"].imagem},
    {nome: "Gato Explodindo", descricaoGato: gatos["Explode"].descricaoGato, caminhoImagem: gatos["Explode"].imagem}
  ]);


  return (
    <>
      <h1>LOJA DE GATITOS :D</h1>

      <h2>Gatitos diponíveis nessa página: {listaGatos.length}</h2>

        <section id="center">

      {
          listaGatos.map((gato) => (
    <GatoCard
      nome={gato.nome}
      descricaoGato={gato.descricaoGato}
      caminhoImagem={gato.caminhoImagem}
          //  evoluirPokemon={() => evoluirPokemon(gato.nome)}
           /> 
        ))}



      {/* <PokemonCard 
         nome={"Pikachu?"}
         estagio={1}
         caminhoImagem={pokemons["Mimikyu"].imagem}
         evoluirPokemon={() => evoluirPokemon(gatos.nome)}
         />  */}
      </section>  
    </>
  )
}

export default App
