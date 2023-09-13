import axios from "axios";
import { create } from "zustand";

const urlCurrency = 'https://api.coincap.io/v2/assets';
const urlExchanges = 'https://api.coincap.io/v2/exchanges';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const useStore = create((set) => ({
    dataCurrencies: [],
    dataExchanges: [],
    dataRates:[],

    fetchCurrencies: async () => {
      const data = await fetcher(urlCurrency);
      set({ dataCurrencies: data.data || "No data available" });
    },

    fetchExchanges: async () => {
      const data = await fetcher(urlExchanges);
      set({ dataExchanges: data.data || "No data available" });
    },
    
}));

export default useStore;
