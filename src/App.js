import React from 'react';
import { Switch,Route ,Redirect,Router} from "react-router-dom";
import Home from "./Home";
import Movie_ge from "./Movie_ge";
import './App.css';
class App extends React.Component{
  render()
  {
    return(
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/:id" component={Movie_ge}/>
   </Switch>
    );
  }
}
export default App;
