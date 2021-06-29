import { makeAutoObservable } from "mobx";
import axios from "axios";

import slugify from "react-slugify";

class CookieStore {
  // receive the cookies data array from the backend
  // make a web/HTTP request to the server to get the cookies
  cookies = [];

  constructor() {
    // Makes it so that when the data is updated the components will be re-rendered.
    makeAutoObservable(this);
  }

  fetchCookies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cookies");
      this.cookies = response.data;
    } catch (error) {
      console.error("fetchCookies: ", error);
    }
  };

  cookieDelete = async (cookieId) => {
    try {
      await axios.delete(`http://localhost:8000/cookies/${cookieId}`);
      const updatedCookies = this.cookies.filter(
        (cookie) => cookie.id !== cookieId
      );
      this.cookies = updatedCookies;
    } catch (error) {
      console.error(error);
    }
  };

  cookieCreate = async (newCookie) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/cookies",
        newCookie
      );
      this.cookies.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  cookieUpdate = (updateCookie) => {
    const cookie = this.cookies.find((cookie) => cookie.id === updateCookie.id);
    // vvv do it in one line 😈vvvv
    cookie.name = updateCookie.name;
    cookie.price = updateCookie.price;
    cookie.description = updateCookie.description;
    cookie.image = updateCookie.image;
    // ^^^^^^^^^^^^^^
    cookie.slug = slugify(updateCookie.name);
  };
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
