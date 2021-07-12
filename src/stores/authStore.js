import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class UserStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.user = decode(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };
}

const userStore = new UserStore();

export default userStore;
