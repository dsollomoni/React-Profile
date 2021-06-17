import { Container, Media } from "react-bootstrap"


function Resume(){
    return (
        <Container>
            <Media>
                <Media.Body>
                    <h1>
                        Front-end Proficiencies
                    </h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h1>Back-end Proficiencies</h1>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequalize</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
                </Media.Body>
            </Media>
        </Container>
    )
}

export default Resume