import React from "react"
import { GlobalStyles } from "./globalStyles";
import Layout from './layout';
import DarkModeManager from './darkModeManager';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  return (
    <DarkModeManager>
      <>
        <GlobalStyles/>
        {element}
      </>
    </DarkModeManager>
  )
}
