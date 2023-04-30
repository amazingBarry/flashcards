import Quiz from './Components/Quiz';
import { questions } from './questions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'

function App() {
  // const [settings, setSettings] = useState(localStorage.getItem('settings'))

  // const saveSettings = (newSettings) => {
  //   localStorage.setItem('settings',newSettings)
  //   setSettings(newSettings)
  // }
  const [questionArray, setQuestionArray] = useState([])
  const [checkedBoxes, setCheckedBoxes] = useState([])
  
  const onCheckboxChange = (e) => {
    const checkboxName = e.target.name
    if (e.target.checked) {
      setCheckedBoxes([...checkedBoxes, checkboxName])
    } else {
      setCheckedBoxes(checkedBoxes.filter(name => name !== checkboxName))
    }
  }

  const startQuiz = () => {
    if(checkedBoxes.length === 0) {
      alert('Please choose at least one question set')
      return
    }

    // set the questionArray to a concat of all the checked boxes questions
    setQuestionArray([].concat(...checkedBoxes.map(c => questions[c])))
  }

  return (
    <div>
      {questionArray.length === 0 ? <>
        {Object.keys(questions).map((set, index) => (
          <Form.Check
            label={set}
            name={set}
            onChange={onCheckboxChange}
            checked={checkedBoxes.includes(set)}
            key={index}
          />
        ))}
        <Button onClick={startQuiz}>
          Begin
        </Button>
        </> : <Quiz questions={questionArray} />}
    </div>
  )
  
}


export default App;
