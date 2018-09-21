import React, { Component } from 'react';
import Popup from 'react-popup';

import axios from 'axios';
class AddCard extends Component {
    onSubmit(e){
        const NewCard={
            name:this.refs.name.value ,
            description:this.refs.description.value  ,
            type:this.refs.type.value,
            address:this.refs.address.value ,
            image:this.refs.image.value ,
            phoneNumber:this.refs.phoneNumber.value ,
           
        };
        
        console.log(NewCard)
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/cards',
            data: NewCard,
            
          
          }).then(
            response => {
              if( response.status === 200){
                
                  alert('success!')
                       
                }
              this.props.history.push('/');
              e.preventDefault();     
              
            }).catch(err => console.log(err));
         
    }
  render() {
    return (      
<div class="container" style={{padding:'50px'}}>
<div class="row">
  <form class="container" onSubmit={this.onSubmit.bind(this)}>
  <div class="form-group">
    <label >Name</label>
    <input name="name" class="form-control"  type="text" ref="name" placeholder="Name"/> 
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>type</label>
    <input  class="form-control" name="type" type="text"   ref="type" placeholder="type"/>
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>description</label>
    <input  class="form-control" name="description" type="text"   ref="description" placeholder="description"/>
    
  </div>
  <div class="form-group">
    <label>address</label>
    <input  class="form-control" name="address" type="text"  ref="address" placeholder="address"/>
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>phone number</label>
    <input  class="form-control" name="phoneNumber" type="number"   ref="phoneNumber" placeholder="phoneNumber"/>
    <small class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label>imageURL</label>
    <input  class="form-control" name="imageURL" type="text"  ref="image" placeholder="imageURL"/>
    <small class="form-text text-muted">required</small>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
   
</div></div>

     
    );
  }
}

export default AddCard;
