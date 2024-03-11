import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'



function App() {

  function handleClick() {
    alert('First clicked')
  }

  const handleClick2 = () => {
    alert('Second clicked')
  }

  const addTOFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>
 
      <Counter></Counter>

      <button onClick={handleClick}>First Click</button>
      <button onClick={handleClick2}>Second Click</button>
      <button onClick={() => alert('third clicked')}>Third click</button>

      {/* bhejailla  */}
      <button onClick={() => addTOFive(3)}>Four</button>

    </>
  )
}

export default App
