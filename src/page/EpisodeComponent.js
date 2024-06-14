import React, {useCallback, useRef, useState} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSearchApi} from "../hooks/useSearchApi";

export const EpisodeComponent = () => {
    const pageCharacter = 'episode'
    const [pageNumber, setPageNumber] = useState(1)
    const observer = useRef()
    const {
        loading,
        error,
        response,
        hasMore
    } = useSearchApi(pageCharacter, pageNumber)

    const lastNodeRef = useCallback((node) => {
        if(loading) return;
        if(observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevState => prevState + 1)
            }
        })
        if(node) {
            observer.current.observe(node);
        }
    }, [loading,hasMore])

    return (
        <>
            <Container>
                <h1 className="d-flex justify-content-center mt-5">Episode</h1>
                {response.map((item, index) =>
                    <ul>
                        <li>
                            <Link to={"/episodes/" + item.id} state={item} key={index}>
                                episode : {item.name}
                            </Link>
                        </li>
                    </ul>
                )}
            </Container>
            {loading && <div className="books-loading">Loading</div>}
            {error && <div className="books-loading">Error</div>}
        </>
    )
}
