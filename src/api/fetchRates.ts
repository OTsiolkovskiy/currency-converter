import axios from 'axios';

export const fetchRates = async (baseCurrency: string): Promise<Record<string, number> | null> => {
  try {
    const response = await axios.get(`https://open.er-api.com/v6/latest/${baseCurrency}`);
    return response.data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
} 
