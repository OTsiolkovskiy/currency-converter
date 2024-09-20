import { FC, useState } from "react";
import { ExchangeRates } from "../../types/ExchangeRates";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";

import './CurrencyConverter.css'

type Props = {
  rates: ExchangeRates;
}

export const CurrencyConverter: FC<Props> = ({ rates }) => {
  const [amount1, setAmount1] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [amount2, setAmount2] = useState(0);
  const [currency2, setCurrency2] = useState('EUR');

  const currencies = Object.keys(rates);

  const convertAmount = (amount: number, fromCurrency: string, toCurrency: string) => {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    const rate = rates[toCurrency] / rates[fromCurrency];
    return +((amount * rate).toFixed(4));
  }

  const handleAmount1Change = (amount: number) => {
    if (amount >= 0) {
      setAmount1(amount);
      setAmount2(convertAmount(amount, currency1, currency2));
    }
  }

  const handleAmount2Change = (amount: number) => {
    if (amount >= 0) {
      setAmount2(amount);
      setAmount1(convertAmount(amount, currency2, currency1));
    }
  }

  const handleCurrency1Change = (currency: string) => {
    setCurrency1(currency);
    // setAmount2(convertAmount(amount1, currency, currency2));
    setAmount1(convertAmount(amount2, currency2, currency));
  }

  const handleCurrency2Change = (currency: string) => {
    setCurrency2(currency);
    // setAmount1(convertAmount(amount2, currency, currency1));
    setAmount2(convertAmount(amount1, currency1, currency));
  }

  return (
    <div className="currency-converter">
      <CurrencyInput 
        amount={amount1} 
        currency={currency1} 
        currencies={currencies} 
        onAmountChange={handleAmount1Change} 
        onCurrencyChange={handleCurrency1Change} 
      />

      <CurrencyInput 
        amount={amount2} 
        currency={currency2} 
        currencies={currencies} 
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
    </div>
  )
}