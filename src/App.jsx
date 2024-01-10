import React,{useState} from 'react'
import { Input } from './components'
// import './App.css'
import useCurrencyInfo from '../hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const CurrencyInfo = useCurrencyInfo(from);
  
  const options = Object.keys(CurrencyInfo);

  //swapping
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  //ab multiply krna h amount ko targeted option ki value se
  const convert = () =>{
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/back_our/20200701/ourmid/pngtree-blue-gradient-stock-currency-creative-synthesis-display-board-esp-background-image_346276.jpg')`,}} >
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bacldrop-blur-sm bg-white/30">
          <form onSubmit={(e) =>{
              e.preventDefault();
              convert();
          }}>
            <div className="w-full mb-1">
              <Input 
              label="From" 
              amount={amount} 
              currencyOptions={options} 
              onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
               <button type='button' className='absolute left-1/2 -translate-x-1/2 translate-y-1/2 border-2
               border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>
            <div className='w-full mt-1 mb-4' >
              <Input 
              label="to"
              amount={convertedAmount} 
              currencyOptions={options} 
              onCurrencyChange= {(currency) =>setTo(currency)}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>convert {from} to {to} </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
