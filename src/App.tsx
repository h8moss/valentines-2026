import React, { useMemo, useState } from 'react'
import './App.css'
import seaLion from '/sea-lion.gif'
import Heart from './Heart';

const numbers = (n: number): number[] => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }

  return result;
}

const generateSize = () => {
  return 45 + 10 * Math.random();
}


function randomPick<T>(arr: T[]): T {
  const index = rand(arr.length)
  return arr[index];
}

const rand = (max: number) => {
  return Math.floor(Math.random() * max)
}

function randomized<T>(list: T[]): T[] {
  const newList = [];
  while (list.length > 0) {
    newList.push(list.splice(rand(list.length), 1)[0]);
  }
  return newList;
}

function App() {
  const [saidYes, setSaidYes] = useState(false);
  const [noCounter, setNoCounter] = useState(0);

  const onYes = () => {
    setSaidYes(true);
  }

  const onNo = () => {
    setNoCounter(v => v + 1);
  }

  const colors = [
    '#ff0000',
    '#ff0059',
    '#ff7fab',
    '#c40024',
    '#9000ff',
    '#ff00d8'
  ]

  const coupons = useMemo(() =>
    randomized([
      'Me coges (tu mandas)',
      'Noche de peliculas',
      'Cita que yo pago',
      'Cita en la que costillitas cocina',
      'Cosquillas infinitas (No te puedes negar)',
      'Besitos a bees',
      'Masaje',
      'Acurrucadas',
      'Vemos la serie que tu quieras'
    ])

    , [])

  const [flipped, setFlipped] = useState<number[]>([]);

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
            {numbers(50).map(i => <Heart
              size={generateSize()}
              color={randomPick(colors)}
              key={i}
              left={rand(window.innerWidth - 50)}
              top={rand(window.innerHeight - 50)}
              delay={rand(500)}
            />)
            }

            <h1>Yippee!!!!!!!!!!!!!!!!!!!!!</h1>
            <img id="sealion" src={seaLion} />

            <div id="coupon-list">
              {numbers(coupons.length).map(v =>
                <div className="coupon-div" key={v} onClick={() => setFlipped(nums => [...nums, v])}>
                  <div className={flipped.includes(v) ? '' : 'flipped'}><p>{coupons[v]}</p></div>
                  <div className={flipped.includes(v) ? 'flipped' : ''}></div>
                </div>
              )}
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App

