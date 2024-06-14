import React from 'react';
import {Container} from "react-bootstrap";
import location from "../DataBase/location.json";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return (
        <>
            <Container>
                <h1 className="d-flex justify-content-center mt-5">Location</h1>
                {location.map((item, index) =>
                    <ul>
                        <li>
                            <Link to={"/location/" + item.id} state={item} key={index}>
                                name: {item.name}
                            </Link>
                        </li>
                    </ul>
                )}
            </Container>
        </>
    )
}

export default HomeComponent