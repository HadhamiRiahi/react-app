import React, { Component } from 'react';
import "./App.css"
import axios from 'axios';
import Navbar from './Component/navbar';
import Card from './Component/Card';
import Layout from './Component/Layout';
import AddCard from './Component/AddCard';
import {   BrowserRouter as Link, Route,Router } from 'react-router-dom';
import CardDetails from './Component/CardDetais';
import EditCard from './Component/EditCard';

const App = () =>(
      
    <div>
<Navbar></Navbar>
<Route exact path='/' component={Layout} />
<Route exact path='/cards/add' component={AddCard} />  
<Route exact path='/cards/details/:id' component={CardDetails} />
<Route exact path='/cards/edit/:id' component={EditCard} />  
</div>


)

export default App;
