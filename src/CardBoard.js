import './styles.css'
import { useEffect, useState } from 'react'
import { shuffle } from './helpers'

const CardBoard = (props) => {

    const [selected, setSelected] = useState(null)
    const { question, wrong1, wrong2, onSubmit} = props
    const [shuffled, setShuffled] = useState(false)

    useEffect(() => {
        setShuffled(false)
    },[question, wrong1, wrong2])

    let questionArray = [question, wrong1, wrong2]

    useEffect(() => {
        if(!shuffled) {
            questionArray = shuffle(questionArray)
            setShuffled(true)
        }
    },[questionArray, shuffled])

    const selectedFunc = () => {
        onSubmit(questionArray[selected])
        setSelected(null)
    }

    const AnsBtn = ({ i }) => {
        const style = 'choiceButton' + ((i == selected) ? ' selectChoice' : '')
        return <div className={style} onClick={() => setSelected(i)}>
        {questionArray[i].answer}
        </div>
    }

    return <>
        <div className='question'>{props.question.question}</div>
        <AnsBtn i={0}/>
        <AnsBtn i={1}/>
        <AnsBtn i={2}/>
        
        <div className='submit' onClick={selectedFunc}>
            Submit
        </div>        
    </>
}

export default CardBoard