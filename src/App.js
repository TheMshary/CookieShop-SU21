import "./App.css";
import CookieList from "./components/CookieList";
import { GlobalStyle, Title, Description, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "blue",
  backgroundColor: "cyan",
};

function App() {
  // JSX
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Title>Cookies and Beyond</Title>
          <Description>Where cookie maniacs gather</Description>
          <ShopImage
            alt="shop"
            src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          />
        </div>
        <CookieList />
      </ThemeProvider>
    </div>
  );
}

export default App;
