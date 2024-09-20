import { FC } from "react"
import { ExchangeRates } from "../../types/ExchangeRates"
import './header.css'

type Props = {
  rates: ExchangeRates,
}

export const Header: FC<Props> = ({ rates }) => {
  
  if (!rates.USD || !rates.EUR) {
    return <p>Loading...</p>;
  }

  return (
    <div className="header">
        <p className="currency">USD = {(1/rates.USD).toFixed(4)}</p>
        <p className="currency">EUR = {(1/rates.EUR).toFixed(4)}</p>
      </div>
  )
}
