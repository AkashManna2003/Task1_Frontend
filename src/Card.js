import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carde(props) {
  return (
    <Card className='card' style={{ width: '18rem', display: 'flex' }}>
      <Card.Img variant="top" src={props.Image} />
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>
        <Card.Text>
          Address: {props.Address}<br/><br/>
          Contact: {props.Contact}<br/><br/>
          Menu:
        </Card.Text>
        <Card.Img variant="top" src={props.Menu} />
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Carde;