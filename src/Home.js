import React from "react";
import {Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";

class Home extends React.Component{
    
render()
{
    return(
    <div>
        <Button variant="contained" placeholder="Thriller" onClick={()=>this.props.history.push("/thriller")}>Thriller</Button>
        <Button variant="contained" placeholder="Documentary" onClick={()=>this.props.history.push("/Documentary")}>Documentary</Button>
        <Button variant="contained" placeholder="Comedy" onClick={()=>this.props.history.push("/Comedy")}>Comedy</Button>
    </div>
    );
}
}
export default withRouter(Home);