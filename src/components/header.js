import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/styles.scss"
import "../styles/navbar.scss"
import { ThemeContext } from 'styled-components';
import styled from "styled-components";
import Toggle from "../components/Toggler";
import ToggleContext from './toggleContext';
import { defaultTheme } from './theme';

const Navbar = styled.div`
  .navbar a{
    color: ${({ theme }) => theme.text};
    transition: color 0.2s linear;
  }
`


const Header = ({ siteTitle }) => (
  <ToggleContext.Consumer>
    {themeToggler => (
      <ThemeContext.Consumer>
        {(theme = defaultTheme) => (
          <header>
            <Navbar>
              <div className={`navbar ${theme.waveClass} animate__animated animate__fadeIn`}
                style={{
                  margin: `0 auto`,
                  maxWidth: `56rem`,
                }}
              >
                <h3 style={{ margin: 0 }}>
                  <Link
                    to="/"
                  >
                    Index
                  </Link>
                </h3>
                <div className="right-side">
                  <h3 className="about-link">
                    <Link
                      to="/about"
                    >
                      About
                    </Link>
                  </h3>
                  <Toggle toggleTheme={themeToggler}/>
                </div>
              </div>
            </Navbar>
          </header>
        )}
      </ThemeContext.Consumer>
    )}
  </ToggleContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
