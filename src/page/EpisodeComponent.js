import React from 'react';
import {Container} from "react-bootstrap";
import episode from "../DataBase/episode";
import {Link} from "react-router-dom";

const EpisodeComponent = () => {
    return (
        <>
            <Container>
                <h1 className="d-flex justify-content-center mt-5">Episode</h1>
                {episode.map((item, index) =>
                    <ul>
                        <li>
                            <Link to={"/episodes/" + item.id} state={item} key={index}>
                                name: {item.name}
                            </Link>
                        </li>
                    </ul>
                )}
            </Container>
        </>
    )
}

export default EpisodeComponent