import { useEffect, useState } from 'react'

import './App.css';
import axios from "axios";

function App() {
  const [amount,setAmount]=useState(1);
  const [fromCurrency, setFromCurrency] =useState("USD")
  const  [toCurrency,setToCurrency]=useState("INR")
  const [convertedAmount, setConvertedAmount]=useState(null);
  (null);

  useEffect(() => {
    const getExchangeRate = async() =>{
      try{
        let url ='https://api.exchangerate-api.com/v4/latest/${fromCurrency}';

        const response = await axios.get(url);
        console.log(response);
      }catch (error){
        console.error("Error fetching exchange rate:",error);
      }
      };
      getExchangeRate();
    
  });

  const handleAmountChange=(e)=>{
    const value =parseFloat(e.target,value);
    setAmount(isNaN(value)?0:value);
  };
 
  const handleFromCurrencyChange =(e)=>{
    setFromCurrency(e.target.value);
  };
  const handleToCurrencyChange =(e)=>{
    setToCurrency(e.target.value);
  };



  return (
    <>
      <div className="currency-converter">
          <div className="box"></div>
          <div className="data">
              <h1> Currency Converter</h1>
                 <div className="input-container">
               <label htmlFor="amt">Amount:</label>
               <input type="number" id="amt"  value={amount} onChange={handleAmountChange}/>
               </div>
               <div className="input-container">
                    <label htmlFor="fromCurrency">From Currency:</label>
                    <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                      <option value="USD">USD - United State Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - BRITHISH POUND TERLINGD</option>
                      <option value="JPY">JPY - JAPANESE</option>
                      <option value="AUD">AUD - AUSTRALIAN</option>
                      <option value="CD">CAD -  CANADIAN DOLLAR</option>
                      <option value="INR">INR - INDIA Dollar</option>
                      <option value="BRL">BRL - BRAZIL State Dollar</option>
                      <option value="ZAR">ZAR - SOUTH State Dollar</option>
                      
                      
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor='tocurrency'>To Currency:</label>
                    <select id="tocurrency" value={toCurrency} onChange={handleToCurrencyChange}>
                      <option value="USD">USD - United State Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - BRITHISH POUND TERLINGD</option>
                      <option value="JPY">JPY - JAPANESE</option>
                      <option value="AUD">AUD - AUSTRALIAN</option>
                      <option value="CD">CAD -  CANADIAN DOLLAR</option>
                      <option value="INR">INR - INDIA Dollar</option>
                      <option value="BRL">BRL - BRAZIL State Dollar</option>
                      <option value="ZAR">ZAR - SOUTH State Dollar</option>
                      
                      
                    </select>
                </div>
                <div className="result"> 
                  <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
                </div>
        
               </div>
               </div>

                
    
    </>
  );
}

export default App
