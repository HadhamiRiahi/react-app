import React, { Component } from 'react';

import axios from 'axios';
class EditCard extends Component {
    constructor(props){
        super(props);
        this.state= { 
            name:'',
            description:'',
            type:'',
            phoneNumber:'',
            image:'',
            address:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }   
 
handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      componentWillMount(){
        this.getMeetup();
      }
 getMeetup(){
        
axios.get(`http://localhost:3000/api/cards/${this.props.match.params.id}`).then(response => {
this.setState({name: response.data.name,
description:response.data.description,
type: response.data.type,
address:response.data.address,
image:response.data.image,
phoneNumber:response.data.phoneNumber}, () => {
           
          })
      })
      .catch(err => console.log(err));
      }   

onSubmit(e)
{
  console.log("onSubmit");
  const newCard = {
          name: this.state.name,
          type: this.state.type,
          description: this.state.description,
          address: this.state.address,
          image: this.state.image,
          phoneNumber: this.state.phoneNumber
      }
      console.log(newCard) ;   this.editCard(newCard) ; 
   e.preventDefault();
}

     editCard(newCard){
     
        
       console.log(newCard);
        axios.request({
          method:'patch',
          url:`http://localhost:3000/api/cards/${this.props.match.params.id}`,
          data: newCard
        }).then(response => {
          this.props.history.push('/');}).catch(err => console.log(err));
      }
    
     
  render() {
    return (      
<div class="container">
<div class="row">
  <form class="container"  onSubmit={this.onSubmit.bind(this)}>
  <div class="form-group">
    <label >Name</label>
    <input name="name" class="form-control" value={this.state.name}  onChange={this.handleInputChange} type="text" ref="name" /> 
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>type</label>
    <input  class="form-control" name="type" type="text" value={this.state.type} onChange={this.handleInputChange}  ref="type" />
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>description</label>
    <input  class="form-control" name="description" type="text" value={this.state.description} onChange={this.handleInputChange}   ref="description"/>
    
  </div>
  <div class="form-group">
    <label>address</label>
    <input  class="form-control" name="address" type="text"  value={this.state.address} onChange={this.handleInputChange} ref="address" />
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>phone number</label>
    <input  class="form-control" name="phoneNumber" type="number"  value={this.state.phoneNumber} onChange={this.handleInputChange} ref="phoneNumber"/>
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>imageURL</label>
    <input  class="form-control" name="image" type="text" value={this.state.image} onChange={this.handleInputChange} ref="image" />
    <small class="form-text text-muted">required</small>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
   
</div></div>
    
     
    );
  }
}

export default EditCard;
