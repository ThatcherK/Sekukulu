import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function Home () {
    const [status ,setStatus] = useState(false);

    const toggleStatus = () => setStatus(!status);
    return (
    <Button variant="primary" onClick={toggleStatus}>{status? 'Off': 'On'}</Button>
    );
  }

export default Home
