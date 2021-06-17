import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"



function Contact (){
    let formSubmit = (e) => {
        const form = e.currentTarget
        if (form.checkValidity() === false) return

        console.log(e.target)
    }

    return (
        <Container>
            <Form onSubmit = {formSubmit}>
            <h1 id = "formLabel">
            Contact
            </h1>
            <Form.Group controlId = "FormName">
                <Form.Label>
                    Name:
                </Form.Label>
                <Form.Control placeholder = "Name" required/>
            </Form.Group>
            <Form.Group controlId = "FormEmail">
                <Form.Label>
                    Email address:
                </Form.Label>
                <Form.Control placeholder = "E-mail" type = "email" required/>
            </Form.Group>
            <Form.Group controlId = "FormMessage">
                <Form.Label>
                    Message:
                </Form.Label>
                <Form.Control placeholder = "Message" as = "textarea" rows = "5" required/>
            </Form.Group>
            
            <Button type = "submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
}

export default Contact