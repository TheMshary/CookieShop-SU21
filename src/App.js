//useState
import { useState } from "react";

// Libraries
import { Route, Switch } from "react-router";

//cookies data
import cookies from "./cookies";

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
  const [_cookies, setCookies] = useState(cookies);

  const cookieDelete = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
    setCookies(updatedCookies);
  };

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        {/* 
          RESTful API Design
          list of cookies: /cookies
          detail of a cookie with ID 1: /cookies/1
          detail of a cookie with ID 3: /cookies/3
         */}
        <Switch>
          <Route path="/cookies/:cookieSlug">
            <CookieDetail cookies={_cookies} cookieDelete={cookieDelete} />
          </Route>
          <Route path="/cookies">
            <CookieList cookies={_cookies} cookieDelete={cookieDelete} />
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
