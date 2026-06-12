import { useParams, useNavigate } from "react-router-dom";
import gatos from "../Data/gatos";

function Gato() {

    const { gatoId } = useParams();
    const navigate = useNavigate();

    const gato = gatos.find(
        (gato) => gato.id === Number(gatoId)
    );

    if (!gato) {
        return <h1>Gato não encontrado</h1>;
    }

    return (
        <>
            <button
                className="botaoVoltar"
                onClick={() => navigate("/gatos-react")}
            >
                ← Voltar
            </button>

            <div className="cardPost">

                <div className="ladoImagem">

                    <img
                        src={gato.imagem}
                        alt={gato.nome}
                        className="imagemPost"
                    />

                </div>

                <div className="ladoInfo">

                    <div className="cabecalhoPost">
                        🐱 Gatos do GHEST377
                    </div>

                    <h2>{gato.nome}</h2>

                    <p className="descricaoPost">
                        {gato.descricaoGato}
                    </p>

                    <p className="curtidas">
                        ❤️ {gato.curtidas} curtidas
                    </p>

                    <h3>💬 Comentários</h3>

                    <div className="listaComentarios">

                        {gato.comentarios.map((comentario, index) => (

                            <p key={index}>
                                <strong>
                                    {comentario.usuario}:
                                </strong>{" "}
                                {comentario.texto}
                            </p>

                        ))}

                    </div>

                </div>

            </div>
        </>
    );
}

export default Gato;