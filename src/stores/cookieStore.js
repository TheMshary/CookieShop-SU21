import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CookieStore {
  // receive the cookies data array from the backend
  // make a web/HTTP request to the server to get the cookies
  cookies = [];
  loading = true;

  constructor() {
    // Makes it so that when the data is updated the components will be re-rendered.
    makeAutoObservable(this);
  }

  fetchCookies = async () => {
    try {
      const response = await instance.get("/cookies");
      this.cookies = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchCookies: ", error);
    }
  };

  cookieDelete = async (cookieId) => {
    try {
      await instance.delete(`/cookies/${cookieId}`);
      const updatedCookies = this.cookies.filter(
        (cookie) => cookie.id !== cookieId
      );
      this.cookies = updatedCookies;
    } catch (error) {
      console.error(error);
    }
  };

  cookieCreate = async (newCookie, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newCookie) formData.append(key, newCookie[key]);

      const response = await instance.post(
        `/bakeries/${bakery.id}/cookies`,
        formData
      );
      this.cookies.push(response.data);
      bakery.cookies.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  cookieUpdate = async (updateCookie) => {
    try {
      const formData = new FormData();
      for (const key in updateCookie) formData.append(key, updateCookie[key]);
      const reposne = await instance.put(
        `/cookies/${updateCookie.id}`,
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

  getCookieById = (cookieId) =>
    this.cookies.find((cookie) => cookie.id === cookieId);
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
