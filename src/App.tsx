import { useEffect, useState } from "react";

import { Header } from "./components/header/Header";
import { CurrencyConverter } from "./components/CurrencyConverter/CurrencyConverter";
import { fetchRates } from './api/fetchRates.ts';

import './App.css';

export const App = () => {
  const [rates, setRates] = useState<Record<string, number>>({});

  const baseCurrency = 'UAH';

  useEffect(() => {
    fetchRates(baseCurrency).then(data => {
      if (data) {
        setRates(data);
      } else
      setRates({});
    });
  }, []);

  return (
    <div className="container">
      <Header rates={rates}  />

      <h1>Exchange rates</h1>

      <CurrencyConverter rates={rates} />
    </div>
  )
}