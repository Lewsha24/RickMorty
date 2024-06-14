import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation, useParams} from "react-router-dom";

export const HeroIdComponent = () => {
    const location = useLocation()
    return (
        <Container>
            <h1 className="d-flex justify-content-center mt-5"> Hero {location.state.name} </h1>
            <Row>
                <Col md={4}>
                    <img src={location.state.image} alt={"sdfs"}/>
                </Col>
                <Col>
                    <span>status: {location.state.status}</span><br/>
                    <span>species: {location.state.species}</span><br/>
                    <span>gender: {location.state.gender}</span><br/>
                    <span>created: {location.state.created}</span><br/>
                    <span>id: {location.state.id}</span><br/>
                </Col>
            </Row>
        </Container>
    )
}
