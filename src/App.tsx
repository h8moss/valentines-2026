import React, { useState } from 'react'
import './App.css'
import seaLion from '/sea-lion.gif'
import heart from '/heart.svg'

function App() {
  const [saidYes, setSaidYes] = useState(false);
  const [noCounter, setNoCounter] = useState(0);

  const onYes = () => {
    setSaidYes(true);
  }

  const onNo = () => {
    setNoCounter(v => v + 1);
  }

  return (
    <>
      <div id="root">
        {!saidYes &&
          <>
            <h1>¿Quieres ser mi San Valentín?</h1>
            <div id="sureBox">
              {Array.from({ length: noCounter }).map(() => <h2 >¿Segura?</h2>)}
            </div>

            <div id="buttonBox">
              <button style={{ '--scale': 1.0 + noCounter * 0.02 } as React.CSSProperties} onClick={onYes}>Sí</button>
              <button style={{ '--scale': 1.0 - noCounter * 0.02 } as React.CSSProperties} onClick={onNo}>No</button>
            </div>
          </>
        }

        {saidYes &&
          <>
            <h1>Yippee!!!!!!!!!!!!!!!!!!!!!</h1>
            <img id="sealion" src={seaLion} />
          </>
        }
      </div>
    </>
  )
}

export default App

/*
 * IDEAS
 * Will you be my valentines?
 * Locked before valentines
 * Coupons
 * A Game
 *
*/
