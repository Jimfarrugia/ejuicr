import { createGlobalStyle } from "styled-components";
import { colors } from "../constants";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: ${colors.white};
        background: ${colors.grayDark};
        font-family: sans-serif;
    }
`;

export default GlobalStyles;
