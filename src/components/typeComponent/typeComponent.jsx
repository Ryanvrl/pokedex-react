import styled from "styled-components";
import { colours } from "../colorTypes/colorTypes";

const TypeComponent = styled.div`
        background-color: ${(type) => colours[type.type]};
        border-radius: 10px;
        padding: 8px;
        color: ${(theme) => theme.theme.color};
        align-items: center;
        display: flex;
        justify-content: center;
        border: 2px solid ${(theme) => theme.theme.color};
        margin: 20px 0;

        @media (max-width: 400px) {
            width: 55px;
            font-size: 13px;
        }

        @media (min-width: 850px) {
            width: 100px;
            font-size: 18px;
        }
`

export { TypeComponent }