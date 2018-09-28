import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (      
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" class="navbar-brand" >Annuaire</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav  mr-auto">
      <li class="nav-item ">
        <Link to="/" class="nav-link" >Acceuil</Link>
      </li>
     
      <li class="nav-item">
      <Link to="/cards/add"  class="nav-link">Ajouter</Link> 
      </li>
      <li class="nav-item ">
        <Link to="/About" class="nav-link" >A propos</Link>
      </li>
     
    </ul>
   
    
  </div>
</nav>


     
    
     
    );
  }
}

export default Navbar ;




