import './App.css';
import CardBoard from './CardBoard';
import { throws as judoQuestions } from './questions'
import { useState } from 'react'
import { getRandomIntFunc } from './helpers'
import './styles.css'
import { AnswerModal } from './Components/AnswerModal';
import { Button, Modal } from 'react-bootstrap'

function App() {

  const rand = getRandomIntFunc(judoQuestions.length)
  const [current, setCurrent] = useState(rand())
  const [wrong1, setWrong1] = useState(rand([current]))
  const [wrong2, setWrong2] = useState(rand([current, wrong1]))
  const [correctCounter, setCorrectCounter] = useState(0)
  const [counter, setCounter] = useState(0)
  const [openSettings, setOpenSettings] = useState(false)
  const [settings, setSettings] = useState(localStorage.getItem('settings'))
  const [answer, setAnswer] = useState(null)

  const onSubmit = (answer) => {
    setCounter(counter + 1)
    setAnswer(answer)
    if(answer.question == judoQuestions[current].question) {
      setCorrectCounter(correctCounter+1)
      //alert('Correct')
    } else {
      //alert('Wrong - Correct answer:' + judoQuestions[current].answer)
    }
    setCurrent(rand())
    setWrong1(rand([current]))
    setWrong2(rand([current, wrong2]))
  }

  const saveSettings = (newSettings) => {
    localStorage.setItem('settings',newSettings)
    setSettings(newSettings)
  }
  
  return (
    <div className="App">
      { openSettings && <div className='settings'>
        <button onClick={() => setOpenSettings(false)}>Close Settings</button>
      </div> }
      <div className=''>
        Score: {correctCounter}/{counter} 
        <span onClick={() => setOpenSettings(true)}>Settings</span>
      </div>
      <AnswerModal 
        show={!!answer} 
        handleClose={() => setAnswer(null)} 
      />
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
