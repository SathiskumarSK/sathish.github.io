import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import { ThemeContext } from 'styled-components';
import { defaultTheme } from './theme';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 0px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in-out;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.4rem;

  circle {
    stroke: ${({ theme }) => theme.text};
  }

  path {
    fill: ${({ theme }) => theme.text};
  }

  :focus {
    outline: none;
  }

  :hover {
    circle {
      stroke: ${({ theme }) => theme.background};
      transition: all 0.1s ease-in-out
    }

    path {
      fill: ${({ theme }) => theme.background};
      transition: all 0.1s ease-in-out;
    }

    background-color: ${({ theme }) => theme.text};;
  }
`;

const Toggle = ({toggleTheme}) => (
  <ThemeContext.Consumer>
    {(theme = defaultTheme) => {
      return (
        <Button onClick={toggleTheme} >
          <svg viewBox="0 0 16 16" width="1em" height="1em" display="block">
            <circle cx="8" cy="8" r="7" fill="none" strokeWidth="1">
            </circle>
            <path d=" M 8 1 A 5 5 0 0 0 8 15 z "></path>
          </svg>
        </Button>
      )}}
  </ThemeContext.Consumer>
);

Toggle.propTypes = {
    toggleTheme: func.isRequired,
}

export default Toggle;
