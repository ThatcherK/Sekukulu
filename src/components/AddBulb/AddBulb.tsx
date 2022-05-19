import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface Bulbs{
    id: string;
    colour: string;
    status: string;
}

function AddBulb () {
    const [show, setShow] = useState(false);
    const [colour, setColour] = useState('');
    const [bulbs, setBulbs] = useState<Bulbs[]>([]);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSelectedColor = (event:any) => {
        setColour(event.target.value)
    }

    const handleAddBulb = () => {
        const bulbDetails = {
            id: uuidv4(),
            colour: colour,
            status: 'disabled'
        }
        setBulbs(bulbs.concat(bulbDetails))
        setShow(false)
    }

    return (
    <>
        <Button variant="primary" onClick={handleShow}>Add Bulb</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add a bulb</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Select aria-label="Default select example" onChange={(e) => handleSelectedColor(e)}>
                <option>Select bulb colour</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </Form.Select>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleAddBulb}>
                Add
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
  }

export {AddBulb}
