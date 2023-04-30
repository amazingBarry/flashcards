import Quiz from './Components/Quiz';
import { questions } from './questions'
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import './styles.css'


function App() {
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
        {questionArray.length === 0 ? 
        <div className='startup justify-content-center'>
          <h2>
            Welcome to the judo quiz.
            Please select the question sets you would like to use.
          </h2>
          <div className='startForm d-flex justify-content-center'>
            {Object.keys(questions).map((set, index) => (
                <Form.Check
                  label={set}
                  name={set}
                  onChange={onCheckboxChange}
                  checked={checkedBoxes.includes(set)}
                  key={index}
                />
            ))}
            </div>
            <Button onClick={startQuiz}>
              Begin
            </Button>

          <div className='thank'>
            <p>Would you like to thank the developer?</p>
            <Button href='https://www.paypal.com/donate/?hosted_button_id=LXT575AVZGSBY' target='_blank'>Donate with PayPal</Button>
          </div>
        </div>
        : <Quiz questions={questionArray} />}
    </div>
  )
  
}

export default App;
