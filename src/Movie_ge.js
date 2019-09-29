import React from "react";
import firebase from "./firebase";
import MoviesList from "./MoviesList";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {onclick,like,book} from "./Action/action";
const mapStateToProps=(store)=>{
    return{
        movies:store.movies,
        id:store.id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick,
        like,
        book
    },dispatch);
}
class Movie_genre extends React.Component{
componentDidMount()
{
    const db=firebase.firestore();
    /*db.collection(`${}`).get().then((query)=>{
       query.forEach((doc)=>{console.log(doc.data())})
    });*/
    console.log(this.props.match.params.id)
    this.props.onclick(`${this.props.match.params.id}`)
}   
render()
{
    return(
        <div>
           <MoviesList  movies={this.props.movies} id={this.props.id} like={this.props.like} book={this.props.book}/>
        </div>
    );
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Movie_genre);