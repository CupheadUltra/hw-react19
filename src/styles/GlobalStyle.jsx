import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #f5f6fa;
    color: #212121;
    line-height: 1.5;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    font-family: inherit;
  }
`;
