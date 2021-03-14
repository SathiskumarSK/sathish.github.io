import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
  }

  html {
    background: ${({ theme }) => theme.background};
    transition: all 0.2s ease-in-out;
  }

  h1, h2, h3, h3 {
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
  }

  li {
    color :${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
  }

  a {
    color: ${({ theme }) => theme.highlightColor};
    transition: all 0.2s ease-in-out;
  }

  .emphasisText {
    background: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
  }

  .emphasisText p, .emphasisText li {
    color: ${({ theme }) => theme.background};
    transition: all 0.2s ease-in-out;
  }

  .gatsby-resp-image-figcaption {
    color: ${({ theme }) => theme.captionColor};
    transition: all 0.2s ease-in-out;
  }
  `
