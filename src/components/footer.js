import {Container, Row, Col} from "react-bootstrap"


function Footer() {
  return (
    <div id = "Footer" className = "w-100 d-flex justify-content-center">
    <Row className = "justify-content-md-center">
       <Col className = "justify-content-center"><a href = "https://stackoverflow.com/story/dsollomoni"> <img alt="#" src = "https://raw.githubusercontent.com/StackExchange/Stacks-Icons/production/src/Icon/LogoGlyph.svg"/></a></Col> 
        <Col className = "justify-content-center"><a href = "https://linkedin.com/in/danny-sollomoni-728943209"><img alt= "#" src = "https://raw.githubusercontent.com/StackExchange/Stacks-Icons/production/src/Icon/LinkedIn.svg"/></a></Col>
        <Col className = "justify-content-center"><a href = "https://github.com/dsollomoni"> <img alt= "#" src = "https://raw.githubusercontent.com/StackExchange/Stacks-Icons/production/src/Icon/GitHub.svg"/></a></Col>

    </Row>
    </div>
  );
}


export default Footer