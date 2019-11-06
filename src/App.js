import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList'
import { Card, Button, Container } from 'react-bootstrap'
import Search from './Search';



export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      List: [
        {
          id: 'Maleficent',
          image: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1565363492/amc-cdn/production/2/movies/53700/53730/PosterDynamic/87999.jpg',
          title: 'Maleficent',
          rating: 3
        },
        {
          id: 'Scary Stories',
          image: "http://fr.web.img6.acsta.net/c_215_290/pictures/19/07/24/11/24/3992643.jpg",
          title: 'Scary Stories',
          rating: 5
        },
        {
          id: 'Drive',
          image: "https://m.media-amazon.com/images/M/MV5BYTZmOTY1MDAtOTYxOC00YTQ1LTlkNDUtMmJiZDEyYmE1YmRmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR16,0,182,268_AL_.jpg",
          title: 'Drive',
          rating: 2

        },
        {
          id: 'El Cilencio Del Viento',
          image: "https://www.promenadesfilms.com/medias/promenadesfilms/Cartel%20El%20Silencio%20del%20Viento.jpg",
          title: 'El Cilencio Del Viento',
          rating: 1

        },
        {
          id: 'SArtemis Fowl',
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Artemis_Fowl_poster.jpg/220px-Artemis_Fowl_poster.jpg",
          title: 'SArtemis Fowl',
          rating: 4

        },
        {
          id: 'Valerian',
          image: "https://media.services.cinergy.ch/media/box1600/2adad8d68850dd65b02425ea64c3c758955f22f6.jpg",
          title: 'Valerian',
          rating: 3
        }
      ],
      keyword : '',
      stars : 1

    }
  }
  add = () => {
    var image = prompt('Movie Image')
    var title = prompt('Movie Title')
    var rating = prompt('Movie Rating')
    var newMovie = { image, title, rating }
    this.setState({ List: [...this.state.List, newMovie] })
  }
  search = text => {
    this.setState({ keyword: text });
  }
  star = nbr => {
    this.setState ({ stars: nbr });
  }
  render() {
    return (
      <div className="App">
        <Container className="container">
          <Search search={(x) => this.search(x)} star={(n) => this.star(n)}/>
          <MovieList list={this.state.List.filter(movie => movie.title.toLowerCase().includes(this.state.keyword.toLowerCase().trim()) && movie.rating >= this.state.stars)} />
          <Card className="ajout" style={{ width: '215px', height: '290px' }}>
            <Button variant="light" onClick={this.add}>+</Button>
          </Card>
        </Container>

      </div>
    );
  }
}

export default App;

