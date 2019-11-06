import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Star from './Star'




const MovieCard = (props) => {

    return (
        <Container className="movie-card">
        
            
            <Card className="card" style={{ width: '215px' }}>
                <Card.Img variant="top" src={props.info.image} style={{ width: '215px', height: '290px' }} />
                <Card.Body>
                    <Card.Title>{props.info.title}</Card.Title>
                    
                    <Star count={props.info.rating} />

                </Card.Body>
            </Card>
            
        
        </Container>
    )
}
export default MovieCard