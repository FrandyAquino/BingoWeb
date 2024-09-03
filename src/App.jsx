import { useState } from 'react'
import './App.css'

function App() {
  const [arrayBingo, setArrayBingo] = useState([])
  const [ficha, setFicha] = useState([])
  const bingo = ["B", "I", "N", "G", "O"]


  function generateTable() {
    const arrayBingo = []

    for (let i = 0; i < 5; i++) {
      arrayBingo.push(bingo[i])
    }

    for (let i = 0; i < 25; i++) {
      let numberRandom = Math.floor((Math.random() * 75) + 1);
      arrayBingo.push(numberRandom)
    }
    setArrayBingo(arrayBingo)
  }
  arrayBingo.length === 0 && generateTable()

  function generateFicha() {
    const arrayFicha = []
    let fichaRandom = Math.floor((Math.random() * 75) + 1);
    arrayFicha.push(fichaRandom)
    setFicha([
      ...ficha,
      fichaRandom
    ])
    console.log(ficha)
  }

  function handleFindFicha(e) {
    arrayBingo.filter((item) => {
      if (item === e.target.innerText) {
        console.log("Ficha encontrada")
      }
    })
  }

  return (
    <>
      <div className="App">
        <h1>Bingo</h1>
        <div className="container">
          {arrayBingo.map((item, index) => (
            <div className='grid-item' key={index}>{item}</div>
          ))}
        </div>
        <button onClick={(() => generateTable())}>Limpiar tablero</button>
        <div className="fichaContainer">
          {ficha.map((item, index) => (
            <p key={index} onClick={((e) => handleFindFicha(e))}>{item}</p>
          ))}
        </div>
        <button onClick={(() => generateFicha())}>Generar ficha</button>
      </div>
    </>
  )
}

export default App