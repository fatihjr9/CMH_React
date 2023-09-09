import { create } from "zustand";

const url = 'https://api.coincap.io/v2/assets';

const useStore = create((set) => ({
    dataCurrencies: [],
    fetchCurrencies: async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const currencies = data.data || [];
        set({ dataCurrencies: currencies });
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    },
  }));

export default useStore;
