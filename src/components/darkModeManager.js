import React from 'react';
import { ThemeProvider } from "styled-components";
import ToggleContext from './toggleContext';

import { lightTheme, darkTheme } from "./theme";

const storageKey = 'theme';

// returns boolean for whether or not dark mode is on
const getDarkModeFromLocalStorage = () => {
  return window.localStorage.getItem(storageKey) === 'true';
}

class DarkModeManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkModeOn: true,
    };
  }

  componentDidMount() {
    // Dark mode is on by default
    let { darkModeOn } = this.state;

    // If there was a previous theme, then use that theme
    if (window.localStorage.getItem(storageKey) !== null) {
      darkModeOn = getDarkModeFromLocalStorage();
    }

    this.setState({ darkModeOn });
  }

  toggleTheme = () => {
    const { darkModeOn } = this.state;
    const newDarkModeOn = !darkModeOn;
    window.localStorage.setItem(storageKey, newDarkModeOn);

    // hacks
    var root = document.documentElement;
    if (newDarkModeOn) {
      root.className = 'dark-mode';
    } else {
      root.className = 'light-mode';
    }

    this.setState({ darkModeOn: newDarkModeOn });
  }

  render() {
    const { children } = this.props;
    const { darkModeOn } = this.state;
    const theme = darkModeOn ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={theme}>
        <ToggleContext.Provider value={this.toggleTheme}>
          {children}
        </ToggleContext.Provider>
      </ThemeProvider>
    );
  }
}

export default DarkModeManager;
