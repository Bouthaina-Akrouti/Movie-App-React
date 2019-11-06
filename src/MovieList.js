import React from 'react'

import { Container } from 'react-bootstrap'
import MovieCard from './MovieCard'


const MovieList = (props) =>{
    return (
        <Container className="d-flex flex-row justify-content-start">
            <div className="movie-list">
                {props.list.map((el) => <MovieCard key={props.id} info={el} />)}
            </div>
            
        </Container>
    )
}

export default MovieList
