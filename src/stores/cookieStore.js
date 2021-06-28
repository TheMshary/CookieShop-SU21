import { makeAutoObservable } from "mobx";
import axios from "axios";

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

  cookieDelete = (cookieId) => {
    const updatedCookies = this.cookies.filter(
      (cookie) => cookie.id !== cookieId
    );
    this.cookies = updatedCookies;
  };
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
