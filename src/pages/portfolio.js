import { Container, Card, Row } from "react-bootstrap";
import Mix from "../assets/Lazy-Mixology.png";
import Event from "../assets/EVENTSRUS.png"
import Face from "../assets/facebook.png"


function Portfolio() {
  return (
    <Container>
        <Row>
      <Card style={{ width: "18rem" }}>
        <a href="https://jlamonade.github.io/cocktail-maker/">
          {" "}
          <Card.Img variant="top" src={Mix} />{" "}
        </a>
        <Card.Body>
          <Card.Title>Lazy Mixology</Card.Title>
          <Card.Text>
            This app helps the user create drinks with the ingreidients they
            have ready.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <a href="https://events-r-us.herokuapp.com/">
          {" "}
          <Card.Img variant="top" src={Event} />{" "}
        </a>
        <Card.Body>
          <Card.Title>EVENTS R US</Card.Title>
          <Card.Text>
            This app is a planner and finder for specific events to a user's liking.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <a href="https://www.facebook.com/">
          {" "}
          <Card.Img variant="top" src={Face} />{" "}
        </a>
        <Card.Body>
          <Card.Title>Facebook</Card.Title>
          <Card.Text>
           PlaceHolder
          </Card.Text>
        </Card.Body>
      </Card>

      </Row>
    </Container>
  );
}
export default Portfolio;
