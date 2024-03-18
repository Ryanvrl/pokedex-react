import styled from "styled-components"
import { colours } from "../components/colorTypes/colorTypes"

const Main = styled.main`
    background-color: ${(theme) => theme.theme.background};
    color: ${(theme) => theme.theme.color};
    display: flex;
    min-height: 90vh;
    align-items: center;
    flex-direction: column;
    font-family: Rubik;
    padding-bottom: 30px;
    padding-top: 50px;
    .container-arrow {
        width: 100%;
    }

    .link-arrow {
        background-color: ${(type) => colours[type.type]};
        padding: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        margin-left: 80px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .icon-arrow {  
        color: #fff;
    }

    .pokemon-page {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 10px;
    }

    .info-pokemon {
        padding: 20px;
        border-radius: 10px;
        background-color: ${(type) => colours[type.type]};
        width:400px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .title-pokemon {
        font-size: 50px;
        text-align: center;
        margin-bottom: 40px;
    }

    .pokemon-imagem {
        width: 400px;
    }

    .title {
        text-align: center;
        margin-bottom: 15px;
    }

    .title-ability {
        margin: 30px 0 5px;
    }

    .text-ability {
        min-width: 225px;
    }

    .types {
        display: flex;
        justify-content: space-evenly;
    }
    
    .type-component {
        margin: 0;
    }

    .abilities-container {
        background-color: ${(type) => colours[type.type]};
        margin: 10px;
        padding: 20px;
        border-radius: 10px;
        width: 1000px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .moves-container {
        background-color: ${(type) => colours[type.type]};
        margin:10px;
        padding: 20px;
        border-radius: 10px;
        width: 1000px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .move {
        display: inline-block;
        margin: 10px 10px 0 0;
        border-radius: 10px;
        padding: 5px 7px;
        background-color: ${(theme) => theme.theme.backgroundInfos};
    }

    @media (min-width: 1450px) {
        .pokemon-imagem {
            width: 700px;
        }
    } 

    @media (max-width: 1050px) {
        .moves-container {
            width: 90%;
        }

        .abilities-container {
            width: 90%;
        }
    } 

    @media (max-width: 850px) {

        .link-arrow {
            margin-left: 40px;
        }

        .pokemon-page {
            justify-content: center;
        }

        .pokemon-imagem {
            width: 300px;
        }

        .title-pokemon {
            font-size: 30px;
        }

        .info-pokemon {
            width: 300px;
        }
    } 

    @media (max-width: 680px) {
        .pokemon-imagem {
            width: 240px;
        }

        .info-pokemon {
            width: 240px;
        }
    } 

    @media (max-width:500px) {
        .pokemon-page {
            flex-direction: column-reverse;
        }

        .pokemon-imagem {
            width: 260px;
            margin-bottom: 20px;
        }

        .title-pokemon {
            font-size: 30px;
        }

        .info-pokemon {
            width: 260px;
        }
    } 

`

export { Main }