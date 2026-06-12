import { Link } from "react-router-dom"
import { useState } from 'react'



function GatoCard({nome,caminhoImagem,descricaoGato,id}){

    const [comprados, setComprados] = useState(0)

    return (
        <div className='CardGato'>
            <Link to={`/gatos-react/${id}`}>
                <img
                src={caminhoImagem}
                width={250}
                height={200}
                alt={nome}
                title={nome}
                />
            </Link>
            <h2>{nome}</h2>

            {/* <p>Descrição: {descricaoGato}</p> */}

            {/* <button onClick={() => setComprados(comprados + 1)}>
                Comprar
            </button>

            <p>
                Gatos comprados: {comprados}
            </p> */}

        </div>
    )
}

export default GatoCard