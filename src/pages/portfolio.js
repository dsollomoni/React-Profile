import { Container, Card } from "react-bootstrap"


function Portfolio () {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../assets/Lazy-Mixology.png"/>
  <Card.Body>
    <Card.Title>Lazy Mixology</Card.Title>
    <Card.Text>
      This app helps the user create drinks with the ingreidients they have ready.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </Container>
    )
}
export default Portfolio