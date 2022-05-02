import './App.css';
import CardBoard from './CardBoard';
import { judoQuestions } from './questions'
import { useState } from 'react'
import { getRandomIntFunc } from './helpers'


function App() {

  const rand = getRandomIntFunc(judoQuestions.length)
  const [current, setCurrent] = useState(rand())
  const [wrong1, setWrong1] = useState(rand([current]))
  const [wrong2, setWrong2] = useState(rand([current, wrong1]))
  const [correctCounter, setCorrectCounter] = useState(0)
  const [counter, setCounter] = useState(0)

  const onSubmit = (answer) => {
    console.log(answer)
    setCounter(counter + 1)
    if(answer.question == judoQuestions[current].question) {
      setCorrectCounter(correctCounter+1)
      alert('Correct')
    } else {
      alert('Wrong - Correct answer:' + judoQuestions[current].answer)
    }
    setCurrent(rand())
    setWrong1(rand([current]))
    setWrong2(rand([current, wrong2]))
  }

  return (
    <div className="App">
      <CardBoard 
        question={judoQuestions[current]} 
        wrong1={judoQuestions[wrong1]}
        wrong2={judoQuestions[wrong2]}
        onSubmit={onSubmit}
      />
    </div>
  );
}


export default App;
