import React from "react";
import { Title, Description, ShopImage } from "../styles";

const Home = () => {
  return (
    <div>
      <Title>Cookies and Beyond</Title>
      <Description>Where cookie maniacs gather</Description>
      <ShopImage
        alt="shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
    </div>
  );
};

export default Home;
