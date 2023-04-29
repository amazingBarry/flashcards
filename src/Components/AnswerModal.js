import { Button, Modal } from 'react-bootstrap'

export const AnswerModal = ({show, handleClose}) => {

    return (<Modal show={show}>
        <Modal.Header closeButton>Answer</Modal.Header>
        <Modal.Body>This is just a test</Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>OK</Button>
        </Modal.Footer>
    </Modal>)
}