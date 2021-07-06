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
      const formData = new FormData();
      for (const key in newCookie) formData.append(key, newCookie[key]);

      const response = await axios.post(
        "http://localhost:8000/cookies",
        formData
      );
      this.cookies.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  cookieUpdate = async (updateCookie) => {
    try {
      const formData = new FormData();
      for (const key in updateCookie) formData.append(key, updateCookie[key]);
      const reposne = await axios.put(
        `http://localhost:8000/cookies/${updateCookie.id}`,
        formData
      );
      const cookie = this.cookies.find(
        (cookie) => cookie.id === reposne.data.id
      );
      for (const key in cookie) cookie[key] = reposne.data[key];
    } catch (error) {
      console.error(error);
    }
  };
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
