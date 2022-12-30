import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [hex, setHex] = useState("#ffffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomhex);
    // console.log(randomhex)
  }


  const arkaplanrengi = useRef(null);

  useEffect(() => {
    console.log(arkaplanrengi);
    // console.log(current.__reactProps$ftuvszwizxq.style.backgroundColor);
  }, [arkaplanrengi, randomHex])
  // 🔺Bunu kendim denedim useRef ile elemente erişip , Onun TAG ve CSS kodlarına erişmeye çalıştım.

  return (
    <div className="App" style={{ backgroundColor: `${hex}` }} ref={arkaplanrengi}>
      <h1>{hex}</h1>
      <button onClick={randomHex}>Arkaplan rengini değiştirmek için tıklayınız.</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>hex değeri kopyalayabilirsiniz.</button>
    </div>
  )
}

export default App
