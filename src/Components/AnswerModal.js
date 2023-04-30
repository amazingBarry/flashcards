import { Button, Modal } from 'react-bootstrap'

const AnswerModal = ({answer, correctAnswer, handleClose}) => {

    return (<Modal show={!!answer}>
        <Modal.Header closeButton>
            <h1>
                { answer && answer.answer === correctAnswer.answer ? "Correct" : "Incorrect"}
            </h1>
        </Modal.Header>
        <Modal.Body><a target={'_blank'}
                href={`https://www.youtube.com/results?search_query=${correctAnswer.question}`}>
                    {correctAnswer.question}
                </a>
                &nbsp;is {correctAnswer.answer}
            </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>OK</Button>
        </Modal.Footer>
    </Modal>)
}

export default AnswerModal