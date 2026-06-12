import { useState } from 'react'
import '../App.css'

import GatoCard from '../Components/GatoCard/GatoCard'

import gatos from '../Data/gatos.js'

import hero from '../assets/joia.png'

function Home() {

   const [filtro, setFiltro] = useState("todos")

   const gatosFiltrados = gatos.filter((gato) => {

      if (filtro === "todos") {
         return true
      }

      if (filtro === "marcados") {
         return false
      }

      return gato.tipo === filtro

   })

   return (
      <>

         <section className="perfil">

            <img
               src={hero}
               alt="Perfil"
               className="fotoPerfil"
            />

            <div className="infoPerfil">

               <h1>Gatos do GHEST377</h1>

               <div className="estatisticas">
                  <span>{gatos.length} publicações</span>
                  <span>120 seguidores</span>
                  <span>50 seguindo</span>
               </div>

               <p>
                  Perfil dedicado aos gatos mais aleatórios da internet 🐱 :D
               </p>

            </div>

         </section>

         <div className="linha">
            __________________________________________________________________________________________________________________________
         </div>

         <div className="menuPosts">

            <button
               className={filtro === "todos" ? "ativo" : ""}
               onClick={() => setFiltro("todos")}
            >
               ⬜ POSTS
            </button>

            <button
               className={filtro === "reel" ? "ativo" : ""}
               onClick={() => setFiltro("reel")}
            >
               🎬 REELS
            </button>

            <button
               className={filtro === "marcados" ? "ativo" : ""}
               onClick={() => setFiltro("marcados")}
            >
               🏷️ MARCADOS
            </button>

         </div>

         


         <section id="center">

            {gatosFiltrados.length > 0 ? (

               gatosFiltrados.map((gato) => (
                  <GatoCard
                     key={gato.id}
                     id={gato.id}
                     caminhoImagem={gato.imagem}
                     descricaoGato={gato.descricaoGato}
                  />
               ))

            ) : (

               <p className="vazio" >
                  Nenhuma publicação encontrada.
               </p>

            )}

         </section>

      </>
   )
}

export default Home