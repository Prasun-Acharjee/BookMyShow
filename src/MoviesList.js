import React from "react";
import MovieItem from "./MovieItem";
class MoviesList extends React.Component{
render()
{
    return(
        <div  className="list">
            { this.props.movies.map((element)=> <MovieItem  key={element.id}
                      element={element} like={this.props.like} book={this.props.book}/>)}
        </div>
    );
}
}
export default MoviesList;