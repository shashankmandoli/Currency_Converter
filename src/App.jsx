import { useState } from 'react';
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setconvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    if(!amount && convertedAmount){
      setAmount("0");
      setconvertedAmount("0");
    }
    else{
      setFrom(to);
      setTo(from);
      setconvertedAmount(amount);
      setAmount(convertedAmount);
    }
    
  };

  const convert = () => {
    const value = parseFloat(amount);
    if (Number.isNaN(value)) return;

    const rate = currencyInfo[to] ?? 0;
    setconvertedAmount((value * rate).toString());
  };

    return (
      <>
        <div className='flex flex-column'>
          <div
            className='w-2/5 bg-no-repeat bg-center bg-cover relative'
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/6266698/pexels-photo-6266698.jpeg')`
            }}
          >
          <div>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 text-[rgba(236,236,236,0.8)] text-8xl font-bold tracking-widest"
            >
              CURRENCY EXCHANGE
            </span>
          </div>
          </div>
          <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
          backgroundImage: `url('https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg')`,
          }}>
          <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => { 
                e.preventDefault();
                convert()         
              }}>
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}  
                  currencyOptions={options} 
                  onAmountChange={setAmount}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from} 
                />
              </div>
              <div className="w-full flex justify-center my-2">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full shadow"
                  type="button"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}  
                          currencyOptions={options} 
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}
                          amountDisable
                      />
                </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from} to {to}
                  </button>
            </form>
            </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default App