import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue }, () => this.props.star(this.state.rating));
    }
    render() {
        return (
            <div className="navbar" >
                <div className="input-search">
                    <input type="text" name="lname" placeholder="Type movie name to search" onChange={(e) => this.props.search(e.target.value)} ></input>
                    <button className="search">Search</button>
                </div>
                <div className="rate">
                    <h2 className="text">Minimum rating</h2>

                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </div>   
            </div>
        )
    }
}
export default Search