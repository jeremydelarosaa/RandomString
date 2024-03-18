import { useState } from "react";
import parole from "./Parole.jsx";
function App() {
  let [string, setString] = useState(0);
  let [parola, setParola] = useState("parola");
  const RandomString = ({ parole }, stato) => {
    let newParola = null;
    let lunghezza = parole.length;
    let random = Math.floor(Math.random() * lunghezza);

    newParola = parole[random];

    let ris =
      parola.includes("are") ||
      parola.includes("ere") ||
      parola.includes("ire");

    if (
      (ris === true && stato === true) ||
      (ris === false && stato === false)
    ) {
      setString(string + 1);
      setParola(newParola);
    } else {
      setString(string - 1);
      setParola(newParola);
    }
  };

  return (
    <div className="container">
      <span id="Parola" value={parola}>
        {parola}
      </span>
      <label> {string}</label>
      <button onClick={() => RandomString({ parole }, true)}>+</button>
      <button onClick={() => RandomString({ parole }, false)}>-</button>
    </div>
  );
}

export default App;
