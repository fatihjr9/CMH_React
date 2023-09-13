/* eslint-disable no-undef */
import { message } from "antd";
import axios from "axios";
import { create } from "zustand";

// API Endpoints
const urlCurrency = 'https://api.coincap.io/v2/assets';
const urlExchanges = 'https://api.coincap.io/v2/exchanges';
const urlRates = 'https://api.coincap.io/v2/rates';

// SWR Setting
const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

// Logical goes here
const useStore = create((set) => ({
  dataCurrencies: [],
  dataExchanges: [],
  dataRates: [],
  detailCurrencies: null,

  fetchCurrencies: async () => {
    try {
      const data = await fetcher(urlCurrency);
      set({ dataCurrencies: data.data || [] });
    } catch (error) {
      message.error("Error fetching currencies: " + error.message);
    }
  },

  fetchDetailCurrencies: async (id) => {
    try {
      const detail = `${urlCurrency}/${id}`;
      const data = await fetcher(detail);
      set({ detailCurrency: data.data || null });
    } catch (error) {
      message.error("Error fetching rate: " + error.message);
    }
  },

  fetchExchanges: async () => {
    try {
      const data = await fetcher(urlExchanges);
      set({ dataExchanges: data.data || [] });
    } catch (error) {
      message.error("Error fetching exchanges: " + error.message);
    }
  },

  fetchRates: async () => {
    try {
      const data = await fetcher(urlRates);
      set({ dataRates: data.data || [] });
    } catch (error) {
      message.error("Error fetching rate: " + error.message);
    }
  },

  
}));

export default useStore;