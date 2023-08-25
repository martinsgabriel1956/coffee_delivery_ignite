import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
  }

  body {
    font-family: ${(props) => props.theme.fonts.types.roboto.fontFamily};
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${(props) => props.theme.fonts.types.baloo2.fontFamily};
  }

  button {
    cursor: pointer;
  }
`;
