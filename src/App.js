//useState
import { useState } from "react";

// Libraries
import { observer } from "mobx-react";

//components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Stores
import bakeryStore from "./stores/bakeryStore";
import cookieStore from "./stores/cookieStore";

const theme = {
  light: {
    mainColor: "#293241",
    backgroundColor: "#e0fbfc",
    pink: "#f283a2",
    red: "red",
  },
  dark: {
    mainColor: "#e0fbfc",
    backgroundColor: "#293241",
    pink: "#f283a2",
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
        {bakeryStore.loading || cookieStore.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </div>
  );
}

export default observer(App);
