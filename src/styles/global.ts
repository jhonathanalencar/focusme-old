import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Roboto Mono', monospace;
  }

  *,
  ::after,
  ::before{
    box-sizing: border-box;
  }
  
  *{
    padding: 0;
    margin: 0;
    font: inherit;
  }

  :focus{
    outline: transparent;
    box-shadow: 0 0 0 0.1rem ${({theme}) => theme['blue-400']};
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.5;
    font-family: var(--ff-primary);
  }
`;