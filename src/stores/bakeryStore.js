import { makeAutoObservable } from "mobx";
import instance from "./instance";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBakeries = async () => {
    try {
      const response = await instance.get("/bakeries");
      // here
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchBakeries: ", error);
    }
  };

  bakeryCreate = async (newBakery) => {
    try {
      const formData = new FormData();
      for (const key in newBakery) formData.append(key, newBakery[key]);

      const response = await instance.post("/bakeries", formData);
      response.data.cookies = [];
      this.bakeries.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();

export default bakeryStore;
