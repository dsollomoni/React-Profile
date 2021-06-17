import {Jumbotron, Container, Image, Col} from "react-bootstrap";
import Profilepic from "../assets/Profilepic.jpg";

function AboutMe (){
    return (
        <Jumbotron fluid>
        <Container>
          <h1>About Me</h1>
            <Col xs={9} md={1}>
                <Image src= {Profilepic} roundedCircle fluid/>
            </Col>
          <p>
            Hi there and welcome to my website! My name is Danny Sollomoni and I am a web developer. I recently graduated from Columbia University Boot camp
            and earned a certificate of Authenticity for Html, CSS, Java, and Javascript.
          </p>
        </Container>
      </Jumbotron>
    )
}

export default AboutMe