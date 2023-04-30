import '../App.css';
import CardBoard from './CardBoard';
import { useState } from 'react'
import { getRandomIntFunc } from '../helpers'
import '../styles.css'
import AnswerModal from './AnswerModal';

const Quiz = ({ questions }) => {
    const rand = getRandomIntFunc(questions.length)
    const [current, setCurrent] = useState(rand())
    const [wrong1, setWrong1] = useState(rand([current]))
    const [wrong2, setWrong2] = useState(rand([current, wrong1]))
    const [correctCounter, setCorrectCounter] = useState(0)
    const [counter, setCounter] = useState(0)
    const [answer, setAnswer] = useState(null)
  
    const onSubmit = (ans) => {
      setCounter(counter + 1)
      setAnswer(ans)
      if(ans.question == questions[current].question) {
        setCorrectCounter(correctCounter+1)
      }
    }
  
    const finishAnswer = () => {
      setAnswer(null)
      setCurrent(rand())
      setWrong1(rand([current]))
      setWrong2(rand([current, wrong2]))
    }
  
    return (
      <div className="App">
        <div className=''>
          Score: {correctCounter}/{counter} 
        </div>
        <AnswerModal 
          answer={answer} 
          correctAnswer={questions[current]}
          handleClose={finishAnswer} 
        />
        <CardBoard 
          question={questions[current]} 
          wrong1={questions[wrong1]}
          wrong2={questions[wrong2]}
          onSubmit={onSubmit}
        />
      </div>
    )
}

export default Quiz