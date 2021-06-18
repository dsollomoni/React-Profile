import { Container, Card, Row } from "react-bootstrap";
import Mix from "../assets/Lazy-Mixology.png";
import Event from "../assets/EVENTSRUS.png";
import Budget from "../assets/budget.png"
import Note from "../assets/note.png"
import Tech from "../assets/tech.png"
import Fitness from "../assets/fitness.png"

function Portfolio() {
  return (
    <Container id = "portfolioContain">
      <Row>
        <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Img variant="top" src={Mix} />{" "}
          <Card.Body>
            <Card.Title>Lazy Mixology</Card.Title>
            <Card.Text>
              This app helps the user create drinks with the ingreidients they
              have ready.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href= "https://jlamonade.github.io/cocktail-maker/" target= "_blank" rel = "noopener noreferrer">App Link</Card.Link>
            <Card.Link href= "https://github.com/dsollomoni/cocktail-maker" target= "_blank" rel = "noopener noreferrer">Github Repo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Img variant="top" src={Event} />{" "}
          <Card.Body>
            <Card.Title>EVENTS R US</Card.Title>
            <Card.Text>
              This app is a planner and finder for specific events to a user's
              liking.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://events-r-us.herokuapp.com/" target= "_blank" rel = "noopener noreferrer">App Link</Card.Link>
            <Card.Link href="https://github.com/dsollomoni/EventsRUs" target= "_blank" rel = "noopener noreferrer">GitHub Repo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Img variant="top" src={Budget} />{" "}
          <Card.Body>
            <Card.Title>Progressive Budget</Card.Title>
            <Card.Text>Able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://warm-lowlands-70386.herokuapp.com/" target= "_blank" rel = "noopener noreferrer">App Link</Card.Link>
            <Card.Link href="https://github.com/dsollomoni/Online-Offline-Budget-Trackers" target= "_blank" rel = "noopener noreferrer">Github Repo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Img variant="top" src={Note} />{" "}
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              This app helps the user take down notes.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://cryptic-shore-80606.herokuapp.com/" target= "_blank" rel = "noopener noreferrer">App Link</Card.Link>
            <Card.Link href="https://github.com/dsollomoni/Express.js-Note-Taker" target= "_blank" rel = "noopener noreferrer">Github Repo</Card.Link>
          </Card.Body>
        </Card>


        <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Img variant="top" src={Fitness} />{" "}
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>
              This app helps the user track their workouts.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://powerful-eyrie-83388.herokuapp.com/" target= "_blank" rel = "noopener noreferrer">App Link</Card.Link>
            <Card.Link href="https://github.com/dsollomoni/Workout-Tracker" target= "_blank" rel = "noopener noreferrer">Github Repo</Card.Link>
          </Card.Body>
        </Card>


        <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Img variant="top" src={Tech} />{" "}
          <Card.Body>
            <Card.Title>Geek Squad</Card.Title>
            <Card.Text>
              This app is a blog for discussing technology with friends.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://tech-blog17.herokuapp.com/" target= "_blank" rel = "noopener noreferrer">App Link</Card.Link>
            <Card.Link href="https://github.com/dsollomoni/Tech-Blog" target= "_blank" rel = "noopener noreferrer">Github Repo</Card.Link>
          </Card.Body>
        </Card>


      </Row>
    </Container>
  );
}
export default Portfolio;
