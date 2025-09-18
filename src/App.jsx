import './App.css'
import Counter from './Counter'
import Player from './Player'
import Bowler from './Bowler'



function App() {
  function handleClick() {
    alert('You have clicked me')
  }



const handleClick3 = () => {
  alert('Alert Number 3')
}

const handleNum = (num) => {
  const newNum = num + 5;
  alert(newNum);
}

  return (
    <>
      
      <h1>Vite + React</h1>
      <Bowler name="Arif Hossain"></Bowler>
      <Player></Player>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('You have clicked me2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={() => alert('click 4') }>Click Me4</button>
      <button onClick={() => handleNum(10)}>Click Add 5</button>
    </>
  )
}

export default App
