import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AddBulb () {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow}>Add Bulb</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add a bulb</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Select aria-label="Default select example">
                <option>Select bulb colour</option>
                <option value="1">Red</option>
                <option value="2">Yellow</option>
                <option value="3">Blue</option>
                <option value="4">Green</option>
            </Form.Select>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Add
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
  }

export {AddBulb}
