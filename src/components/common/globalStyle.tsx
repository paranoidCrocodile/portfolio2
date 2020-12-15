import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 25px;
  }
  *{
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  }
`;

export default GlobalStyle;
