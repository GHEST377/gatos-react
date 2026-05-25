import { useState } from 'react'

function GatoCard({nome,caminhoImagem,descricaoGato}){

    const [comprados, setComprados] = useState(0)

    return (
        <div className='CardGato'>

            <img
              src={caminhoImagem}
              width={250}
              height={200}
              alt={nome}
              title={nome}
            />

            <h2>{nome}</h2>

            <p>Descrição: {descricaoGato}</p>

            <button onClick={() => setComprados(comprados + 1)}>
                Comprar
            </button>

            <p>
                Gatos comprados: {comprados}
            </p>

        </div>
    )
}

export default GatoCard