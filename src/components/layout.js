/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Toggle from "../components/Toggler";
import ToggleContext from './toggleContext';

import "./layout.scss"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ToggleContext.Consumer>
      {themeToggler => (
        <>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: `52rem`,
              padding: `0px 1.0875rem 1.0rem`,
              paddingTop: 0,
            }}
            className="layout"
            >
            <main>
              {children}
            </main>
            {function() {
              return (
                <footer>
                  <h3>
                    © {new Date().getFullYear()} Sathiskumar. Built with ♥
                  </h3>
                </footer>
              )
            }()}
          </div>
        </>
      )}
    </ToggleContext.Consumer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
