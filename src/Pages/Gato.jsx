import { useParams, useNavigate } from "react-router-dom";
import gatos from "../Data/gatos";

function Gato(){
    const { gatoId } = useParams();
    const navigate = useNavigate();

    const gato = gatos.find((gato) => gato.id === Number(gatoId));

    if (!gato) {
        return <h1>Gato não encontrado</h1>;
    }

    return (

        <>
         <h1>{gato.nome}</h1>
         <div>
            <img
                src={gato.imagem}
                width={250}
                height={200}
                alt={gato.descricaoGato}
                title={gato.descricaoGato}
                />
            </div>    
         <p>Descrição: {gato.descricaoGato}</p>
         <button className="botaoVoltar"
          onClick={() => navigate("/gatos-react")}>
            Voltar para a Home
         </button>
        </>
    )
    
}

export default Gato