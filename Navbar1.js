import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

function Enav() {
  return (
    <div className='navbar'>
    <Navbar  className=" justify-content-end">
      
      <Form inline>
        <Row>
          <Col xs="auto"className="search">
            <Form.Control 
              type="text"
              placeholder="Search"
              className=" mr-sm-2 "
            />
          </Col>
          <Col xs="auto" className='bell'>
                <i className=" bi bi-bell fs-4 "></i>
          </Col>
          <Col xs="auto">
            <Button className="but" type="submit">Post A Job</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  );
}

export default Enav;