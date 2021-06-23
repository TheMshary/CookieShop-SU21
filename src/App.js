//useState
import { useState } from "react";

// Libraries
import { Route, Switch } from "react-router";

//components
import CookieList from "./components/CookieList";
import CookieDetail from "./components/CookieDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#293241",
    backgroundColor: "#e0fbfc",
    red: "red",
  },
  dark: {
    mainColor: "#e0fbfc",
    backgroundColor: "#293241",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/cookies/:cookieSlug">
            <CookieDetail />
          </Route>
          <Route path="/cookies">
            <CookieList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
