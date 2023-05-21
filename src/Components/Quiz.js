import '../App.css';
import CardBoard from './CardBoard';
import { useEffect, useState } from 'react'
import { getRandomIntFunc } from '../helpers'
import '../styles.css'
import AnswerModal from './AnswerModal';

const Quiz = ({ questions }) => {
    const rand = getRandomIntFunc(questions.length)
    const [current, setCurrent] = useState(0)
    const [wrong1, setWrong1] = useState(0)
    const [wrong2, setWrong2] = useState(0)
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

    const getNewQuestions = () => {
      const localCurrent = rand()
      setCurrent(localCurrent)
      const localWrong = rand([localCurrent])
      setWrong1(localWrong)
      const localWrong2 = rand([localCurrent, localWrong])
      setWrong2(localWrong2)
    }

    // Set initial set of questions
    useEffect(() => {
      getNewQuestions()
    },[])
  
    const finishAnswer = () => {
      setAnswer(null)
      getNewQuestions()
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