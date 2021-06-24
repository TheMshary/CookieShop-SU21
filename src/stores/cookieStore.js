import cookies from "../cookies";
import { makeAutoObservable } from "mobx";

import slugify from "react-slugify";

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

  cookieCreate = (newCookie) => {
    newCookie.id = this.cookies.length + 1;
    newCookie.slug = slugify(newCookie.name);
    this.cookies.push(newCookie);
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
export default cookieStore;
