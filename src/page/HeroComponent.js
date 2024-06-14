import React, {useCallback, useRef, useState} from "react";
import { Container, } from "react-bootstrap";
import {useSearchApi} from "../hooks/useSearchApi";
import {Link} from "react-router-dom";

export const HeroComponent = () => {
    const pageCharacter = 'character'
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
        <Container>
            <h1 className="d-flex justify-content-center mt-5">Hero</h1>
            <ul>
            {
                response.map((item, index) => {
                    if(response.length === index + 1) {
                        return <li>
                                <Link to={"/hero/" + item.id} ref={lastNodeRef} state={item} key={index}>
                                    name: {item.name}
                                </Link>
                            </li>

                    } else {
                        return<li>
                                <Link to={"/hero/" + item.id} ref={lastNodeRef} state={item} key={index}>
                                    name: {item.name}
                                </Link>
                            </li>
                    }
                })

            }
            </ul>
            {loading && <div className="books-loading">Loading</div>}
            {error && <div className="books-loading">Error</div>}
        </Container>
    )
}
