
import './App.css'
import {useState} from "react";

function App() {

    const [sBCount, setsBCount] = useState(0);
    const [bCount, setbCount] = useState(0);
    const [aCount, setaCount] = useState(0);
    const [kCount, setkCount] = useState(0);

  return (
    <>
        <img src="./src/assets/screenshot-logo.png"/>
        <article className="fruit">
            <h2>Aardbeien</h2>
            <button type="button" onClick={ () => setsBCount(sBCount === 0 ? 0 : sBCount - 1)}>-</button>
            <p>{sBCount}</p>
            <button type="button" onClick={ () => setsBCount(sBCount+1)}>+</button>
        </article>
        <article className="fruit">
            <h2>Bananen</h2>
            <button type="button" onClick={ () => setbCount(bCount === 0 ? 0 : bCount - 1)}>-</button>
            <p>{bCount}</p>
            <button type="button" onClick={ () => setbCount(bCount+1)}>+</button>
        </article>
        <article className="fruit">
            <h2>Appels</h2>
            <button type="button" onClick={ () => setaCount(aCount === 0 ? 0 : aCount - 1)}>-</button>
            <p>{aCount}</p>
            <button type="button" onClick={ () => setaCount(aCount+1)}>+</button>
        </article>
        <article className="fruit">
            <h2>Kiwi's</h2>
            <button type="button" onClick={ () => setkCount(kCount === 0 ? 0 : kCount - 1)}>-</button>
            <p>{kCount}</p>
            <button type="button" onClick={ () => setkCount(kCount+1)}>+</button>
        </article>
        <button onClick={ () => {
            setsBCount(0);
            setbCount(0);
            setaCount(0);
            setkCount(0);
        }}>Reset</button>
    </>
  )
}

export default App
