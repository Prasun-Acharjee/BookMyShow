import React, { Component } from 'react';
import {Card,CardHeader,CardContent,CardMedia,CardActions,Badge,IconButton, Button,Modal,makeStyles} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {withRouter} from "react-router-dom";
class MovieItem extends Component{
   constructor(props)
   {
       super(props)
       this.state={modal:false,details:{email:"",name:"",phone:""}}
   }
   addUser=()=>
   {
    this.props.book(this.props.match.params.id,this.props.element.id,this.props.element.data().Tickets,this.state.details.name,this.state.details.email,this.state.details.phone)
    const { details } = this.state;
    details.email ="";
    details.name="";
    details.phone="";
    this.setState({
      details,
    });
   }
   onchange=(e)=>
   {
     
     const { details } = this.state;
     details[e.target.name] = e.target.value;
     this.setState({
       details,
     });
   }
    componentDidMount()
   {
        console.log(this.props.element.id)
   }
   
      render(){
       
        return(
            <div>
                <Card style={{maxWidth:"400px",border:"20px"}}>
                    <CardHeader title={this.props.element.data().Name}/>
                    <img src={this.props.element.data().url}/>
                    <CardContent>
                        Description: {this.props.element.data().Description}<br/>
                        Director: {this.props.element.data().Director}
                    </CardContent>
                    <CardActions>
                        <Badge badgeContent={this.props.element.data().Likes} color="secondary">
                            <IconButton aria-label="add to favs" onClick={()=>this.props.like(this.props.match.params.id,this.props.element.id,this.props.element.data().Likes)}>
                                <FavoriteIcon />
                            </IconButton>
                        </Badge>&emsp;
                        No of tickets left: {this.props.element.data().Tickets}
                        <br/>
                        <Button variant="contained" onClick={()=>this.setState({modal:true})}>Book Tickets</Button>
                        <Modal  aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.modal} onClose={()=>this.setState({modal:false})}>
                            <div className="modal-style"> 
                            <form>
                                <label>
                                    Name:
                                    <input type="text" value={this.state.details.name} name="name" onChange={this.onchange}/>
                                </label><br/>
                                <label>
                                    Phone No:
                                    <input type="text" value={this.state.details.phone} name="phone" onChange={this.onchange}/>
                                </label><br/>
                                <label>
                                    Email:
                                    <input type="email" value={this.state.details.email} name="email" onChange={this.onchange}/>
                                </label><br/>
                                <Button variant="contained" onClick={this.addUser}>Book</Button>
                                </form>
                            </div>
                        </Modal>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
export default withRouter(MovieItem);

