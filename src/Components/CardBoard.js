import '../styles.css'
import { useEffect, useState } from 'react'
import { shuffle } from '../helpers'

const CardBoard = (props) => {

    const [selected, setSelected] = useState(null)
    const { question, wrong1, wrong2, onSubmit} = props
    const [shuffled, setShuffled] = useState(false)
    const [questionArray, setQuestionArray] = useState([question, wrong1, wrong2])

    useEffect(() => {
            setQuestionArray(shuffle([question, wrong1, wrong2]))
        },[question, wrong1, wrong2, setQuestionArray])

    const selectedFunc = () => {
        onSubmit(questionArray[selected])
        setSelected(null)
    }

    const AnsBtn = ({ i }) => {
        if(questionArray.length > i) {
            const style = 'choiceButton' + ((i == selected) ? ' selectChoice' : '')
            return <div className={style} onClick={() => setSelected(i)}>
            {questionArray[i].answer}
            </div>
        } else return <></>
    }

    return <>
        <div className='question'>
            <a target={'_blank'}
                href={`https://www.youtube.com/results?search_query=${props.question.question}`}>
                {props.question.question}
            </a>
            </div>
        <AnsBtn i={0}/>
        <AnsBtn i={1}/>
        <AnsBtn i={2}/>
        
        <div className='submit' onClick={selectedFunc}>
            Submit
        </div>        
    </>
}

export default CardBoard