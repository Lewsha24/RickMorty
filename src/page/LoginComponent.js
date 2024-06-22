import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/AuthContext";


const LoginComponent = ({}) => {
    const auth = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || '/'

    const handleSubmit = (event) => {
        // Останавливаем дейсвтие браузера
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')

        console.log(username);
        auth.signin(username, () => {
            navigate(from,{
                replace: false,
            })
        });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form
                        onSubmit={handleSubmit}
                    >
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" name="username" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                                Please input name
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                Please input password
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginComponent