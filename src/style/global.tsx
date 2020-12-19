import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root{
    font-size: 25px;
  }
  *{
    user-select: none;
    transition: color 0.25s ease-in-out;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  html{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-y: auto;
  }
  body{
    overflow-x: hidden;
  }
`;

export default Global;
