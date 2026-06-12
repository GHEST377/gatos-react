import formalImagem from '../assets/gatoformal.jpg'
import explosionImagem from '../assets/gatoexplosion.jpg'
import cafeImagem from '../assets/gatocafe.jpg'
import bravoImagem from '../assets/gatobravo.jpg'
import rindoImagem from '../assets/gatorindo.jpg'
import explodeImage from '../assets/catExplode.gif'

const gatos = [

    {
        id: 1,
        nome: "Gato Formal",
        tipo: "post",

        descricaoGato: "Um gato elegante.",

        curtidas: 999,

        comentarios: [
            {
                usuario: "joao123",
                texto: "Muito elegante!"
            },
            {
                usuario: "ana_gatos",
                texto: "Parece um empresário kkk"
            }
        ],

        imagem: formalImagem
    },

    {
        id: 2,
        nome: "Gato Explosão",
        tipo: "post",

        descricaoGato: "Um gato com uma explosão ao fundo.",

        curtidas: 999,

        comentarios: [
            {
                usuario: "catlover",
                texto: "Essa foto ficou incrível!"
            },
            {
                usuario: "pedro",
                texto: "O gato nem ligou pra explosão."
            }
        ],

        imagem: explosionImagem
    },

    {
        id: 3,
        nome: "Gato Café",
        tipo: "post",

        descricaoGato: "Um gato tomando seu café.",

        curtidas: 999,

        comentarios: [
            {
                usuario: "maria",
                texto: "Eu antes de trabalhar."
            },
            {
                usuario: "cafezinho",
                texto: "Preciso de um café desses."
            }
        ],

        imagem: cafeImagem
    },

    {
        id: 4,
        nome: "Gato Rindo",
        tipo: "post",

        descricaoGato: "Um gato rindo de alguma coisa.",

        curtidas: 999,

        comentarios: [
            {
                usuario: "rafa",
                texto: "Eu quero saber a piada."
            },
            {
                usuario: "bia",
                texto: "Não consigo parar de rir olhando isso kkkk"
            }
        ],

        imagem: rindoImagem
    },

    {
        id: 5,
        nome: "Gato Bravo",
        tipo: "post",

        descricaoGato: "Um gato muito bravo.",

        curtidas: 999,

        comentarios: [
            {
                usuario: "leo",
                texto: "Ele parece estar julgando alguém."
            },
            {
                usuario: "gatinha",
                texto: "Melhor não irritar esse aí."
            }
        ],

        imagem: bravoImagem
    },

    {
        id: 6,
        nome: "Gato Explodindo",
        tipo: "reel",

        descricaoGato:
            "Um gato que... bem... explodiu de novo.",

        curtidas: 999,

        comentarios: [
            {
                usuario: "joao123",
                texto: "Muito fofo!"
            },
            {
                usuario: "ana_gatos",
                texto: "Adorei esse reel."
            },
            {
                usuario: "explosivo",
                texto: "Ele explodiu de novo kkkkk"
            }
        ],

        imagem: explodeImage
    }

]

export default gatos