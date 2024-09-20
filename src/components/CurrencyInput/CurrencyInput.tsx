import { FC } from "react"
import './CurrencyInput.css';

type Props = {
  amount: number,
  currency: string,
  currencies: string[],
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
}

export const CurrencyInput: FC<Props> = ({ 
  amount, 
  currency, 
  currencies, 
  onAmountChange, 
  onCurrencyChange 
}) => {

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      e.target.value = "0";
    }
  };

  return (
   <div className="currency-container">
    <input 
      className="currency-input"
      type="text"
      value={amount}
      onChange={(e) => onAmountChange(Number(e.target.value))}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    
    <select
      className="currency-select"
      value={currency}
      onChange={(e) => onCurrencyChange(e.target.value)}
    >
    {currencies.map((curr) => (
      <option key={curr} value={curr}>
        {curr}
      </option>
    ))}
  </select>
   </div>
  )
}
