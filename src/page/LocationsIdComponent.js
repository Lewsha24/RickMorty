import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";

export const LocationsIdComponent = () => {
    const location = useLocation()
    console.log(location.state)
    return (
        <Container>
            <h1 className="d-flex justify-content-center mt-5"> Hero {location.state.name} </h1>
            <Row>
                <Col md={4}>
                    <img src={location.state.image} alt={"простите, картинки нет"}/>
                </Col>
                <Col>
                    <span>id: {location.state.id}</span><br/>
                    <span>type: {location.state.type}</span><br/>
                    <span>dimension: {location.state.dimension}</span><br/>
                    <span>created: {location.state.created}</span><br/>

                </Col>
            </Row>
        </Container>
    )
}
