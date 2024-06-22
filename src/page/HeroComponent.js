import React from "react";
import { Container, } from "react-bootstrap";
import characters from "../DataBase/characters.json"
import {Link} from "react-router-dom";

const HeroComponent = () => {
    return (
        <Container>
            <h1 className="d-flex justify-content-center mt-5">Hero</h1>
                {characters.map((item, index) =>
                    <ul>
                        <li>
                            <Link to={"/hero/" + item.id} state={item} key={index}>
                                name: {item.name}
                            </Link>
                        </li>
                    </ul>
                )}
        </Container>
    )
}

export default HeroComponent;