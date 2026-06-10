import { useState } from 'react'
import '../App.css'
import GatoCard from '../Components/GatoCard/GatoCard'
import gatos from '../Data/gatos.js'





function Home(){
   const [listaGatos, setListaGatos] = useState(gatos)
    //    {id: 1, nome: "Gato Formal", descricaoGato: gatos["Formal"].descricaoGato, caminhoImagem: gatos["Formal"].imagem},
    //    {id: 2, nome: "Gato Explosão", descricaoGato: gatos["Explosao"].descricaoGato, caminhoImagem: gatos["Explosao"].imagem},
    //    {id: 3, nome: "Gato Café", descricaoGato: gatos["Cafe"].descricaoGato, caminhoImagem: gatos["Cafe"].imagem},
    //    {id: 4, nome: "Gato Rindo", descricaoGato: gatos["Rindo"].descricaoGato, caminhoImagem: gatos["Rindo"].imagem},
    //    {id: 5, nome: "Gato Bravo", descricaoGato: gatos["Bravo"].descricaoGato, caminhoImagem: gatos["Bravo"].imagem},
    //    {id: 6, nome: "Gato Explodindo", descricaoGato: gatos["Explode"].descricaoGato, caminhoImagem: gatos["Explode"].imagem}
     
   
   
     return (
       <>
         <h1>LOJA DE GATITOS :D</h1>
   
         <h2>Gatitos diponíveis nessa página: {listaGatos.length}</h2>
   
           <section id="center">
   
            {
             listaGatos.map((gato) => (
            
                <GatoCard
                 id={gato.id}
                 key={gato.id}
                 nome={gato.nome}
                 caminhoImagem={gato.imagem}
                 descricaoGato={gato.descricaoGato}
                />
             ))
            }

   
   
   
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


export default Home;