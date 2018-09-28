import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import {   BrowserRouter as Link, Route,Router } from 'react-router-dom';
import Masonry from 'react-masonry-component';
const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
class Layout extends Component {
  constructor () {
    super();
    this.state = {
      cards : []
    }
  }
  
  getMeetups(){
   axios.get('http://localhost:3000/api/cards')
     .then(response => {
        this.setState({cards: response.data}, () => {
        console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }
  componentWillMount(){
    this.getMeetups();
  }

  
  render() {
   
    const cardItem = this.state.cards.map((card,id)=>{
      
      return <Card   key={id} item={card}/>
    });


    return (    
      <div>

<div class="container">
<div class="row" id="home-grid-system">
<div class="album   col-md-12 py-5 ">
<Masonry>
    {cardItem }       
</Masonry>
</div>
</div>
</div></div>



    


      );
  }
}

export default Layout;
