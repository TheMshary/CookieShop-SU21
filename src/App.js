import "./App.css";
import cookies from "./cookies";
import CookieList from "./components/CookieList";
import { Title } from "./styles";

function App() {
  const cookieList = cookies.map((cookie) => (
    <div className="cookie" key={cookie.id}>
      <img alt={cookie.name} className="cookie-image" src={cookie.image} />
      <p className="text">{cookie.name}</p>
      <p className="text">{cookie.price} KD</p>
    </div>
  ));

  // JSX
  return (
    <div>
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
    </div>
  );
}

export default App;
