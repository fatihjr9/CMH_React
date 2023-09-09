import { create } from "zustand";

const urlCurrency = 'https://api.coincap.io/v2/assets';
const urlExchanges = 'https://api.coincap.io/v2/exchanges';

const useStore = create((set) => ({
    dataCurrencies: [],
    dataExchanges: [],
    fetchCurrencies: async () => {
      try {
        const res = await fetch(urlCurrency);
        const data = await res.json();
        const currencies = data.data || [];
        set({ dataCurrencies: currencies });
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    },
    fetchExchanges: async () => {
      try {
        const res = await fetch(urlExchanges);
        const data = await res.json();
        const exchanges = data.data || [];
        set({ dataExchanges: exchanges });
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    },
}));

export default useStore;
