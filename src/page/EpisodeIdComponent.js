import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const LocationsIdComponent = () => {
    const location = useLocation()
    return (
        <Container>
            <h1 className="d-flex justify-content-center mt-5"> Hero {location.state.name} </h1>
            <Row>
                <Col md={4}>
                    <img src={location.state.image} alt={"простите, картинки нет"}/>
                </Col>
                <Col>
                    <span>id: {location.state.id}</span><br/>
                    <span>name: {location.state.name}</span><br/>
                    <span>air_date: {location.state.air_date}</span><br/>
                    <span>episode: {location.state.episode}</span><br/>
                    <span>created: {location.state.created}</span><br/>

                </Col>
            </Row>
        </Container>
    )
}

export default LocationsIdComponent;