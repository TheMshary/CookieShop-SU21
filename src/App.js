//useState
import { useState } from "react";

//cookies data
import cookies from "./cookies";

//components
import CookieList from "./components/CookieList";
import CookieDetail from "./components/CookieDetail";

//styles
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ThemeButton,
} from "./styles";
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
  const [cookie, setCookie] = useState(null);
  const [_cookies, setCookies] = useState(cookies);

  const cookieDelete = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
    setCookies(updatedCookies);
  };

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };
  const setView = () => {
    return cookie ? (
      <CookieDetail
        cookie={cookie}
        setCookie={setCookie}
        cookieDelete={cookieDelete}
      />
    ) : (
      <CookieList
        setCookie={setCookie}
        cookies={_cookies}
        cookieDelete={cookieDelete}
      />
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <div>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} mode
          </ThemeButton>
          <Title>Cookies and Beyond</Title>
          <Description>Where cookie maniacs gather</Description>
          <ShopImage
            alt="shop"
            src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          />
        </div>
        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;
