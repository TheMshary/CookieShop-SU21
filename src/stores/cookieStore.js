import cookies from "../cookies";
import { makeAutoObservable } from "mobx";

class CookieStore {
  cookies = cookies;

  constructor() {
    // Makes it so that when the data is updated the components will be re-rendered.
    makeAutoObservable(this);
  }

  cookieDelete = (cookieId) => {
    const updatedCookies = this.cookies.filter(
      (cookie) => cookie.id !== cookieId
    );
    this.cookies = updatedCookies;
  };
}

const cookieStore = new CookieStore();
export default cookieStore;
