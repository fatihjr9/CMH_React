import axios from "axios";
import { create } from "zustand";

const API_BASE_URL = 'https://api.coincap.io/v2';

let lastNetworkErrorTime = 0;
const THROTTLE_NETWORK_ERROR_INTERVAL = 5000;

const fetcher = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.data || [];
  } catch (error) {
    const currentTime = Date.now();
    if (currentTime - lastNetworkErrorTime >= THROTTLE_NETWORK_ERROR_INTERVAL) {
      error(`Error fetching data from ${url}: Network Error`);
      lastNetworkErrorTime = currentTime;
    }
  }
};

const useStore = create((set) => ({
  dataCurrencies: [],
  dataExchanges: [],
  dataRates: [],
  detailCurrency: null,

  fetchCurrencies: async () => {
    const data = await fetcher(`${API_BASE_URL}/assets`);
    set({ dataCurrencies: data });
  },

  calculateTotalMarketCap: () => {
    const { dataCurrencies } = useStore.getState();
    return dataCurrencies.reduce((totalMarketCap, currency) => {
      return totalMarketCap + parseFloat(currency.marketCapUsd || 0);
    }, 0);
  },

  fetchDetailCurrency: async (id) => {
    const data = await fetcher(`${API_BASE_URL}/assets/${id}`);
    set({ detailCurrency: data[0] || null });
  },

  fetchExchanges: async () => {
    const data = await fetcher(`${API_BASE_URL}/exchanges`);
    set({ dataExchanges: data });
  },

  fetchRates: async () => {
    const data = await fetcher(`${API_BASE_URL}/rates`);
    set({ dataRates: data });
  },
}));

export default useStore;