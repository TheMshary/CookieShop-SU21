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
<<<<<<< HEAD
      <div>
        <Title>PUWPLE ME PWEEZ</Title>
        <h1 className="text">Cookies and Beyond</h1>
        <h4 className="text">Where cookie maniacs gather</h4>
        <img
          id="shop-image"
          alt="shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
        />
      </div>
      <CookieList />
      <div className="list">{cookieList}</div>
=======
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
>>>>>>> 82df1c61f7ed73338c88ab42f3c74567469d78c9
    </div>
  );
}

export default App;
