import React, { Component } from 'react';
import axios from 'axios';
class CardDetails extends Component {
    constructor(props){
        super(props);
        this.state= { details:''}
    console.log(this.props.match.params.id);}   


    componentWillMount(){
        this.getMeetup();
      }
    
      getMeetup(){
        let cardId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/cards/${cardId}`)
        .then(response => {
          this.setState({details: response.data}, () => {
            console.log(this.state);
          })
      })
      .catch(err => console.log(err));
      }
    
    
  render() {
     
return ( 

<div class="container" style={{marginTop:'2%',margin:'20px',
padding:'30px'}} >
            <div class="panel-heading lead">
                <div class="row">
                    <div class="col-lg-8 col-md-8">{this.state.details.name}</div>  
                </div>
            </div>
            <div class="panel-body">
                 <div class="row">
                        <div class="col-lg-12 col-md-12 ">
                         <div class="row">
                         <div class="col-lg-3 col-md-3">
                                    <center>
                                        <span class="text-left">
 <img src={this.state.details.image} class="img-responsive img-thumbnail"/>                         
                                    </span>
                                    </center>     
                                </div>
                                <div class="col-lg-9 col-md-9"   >
                                    <ul class="nav nav-tabs"    >
                                        <li class="active"><a data-toggle="tab" href="#Summery"   style={{marginLeft:'20px'}}><i class="fa fa-indent" ></i> Summery</a></li>
                                        <li><a data-toggle="tab"  href="#Contact"><i class="fa fa-bookmark-o" style={{marginLeft:'20px'}}></i> Contact Info</a></li>
                                        <li><a data-toggle="tab" href="#Address" ><i class="fa fa-home" style={{marginLeft:'20px'}}></i> Address</a></li>
                                    </ul>

                                    <div class="tab-content">
                                        <div id="Summery" class="tab-pane fade">
                                         <div class="table-responsive panel">
                                                <table class="table">
                                                    <tbody>
                                                          <tr>
                                                                <td><i class="fa fa-user"></i>Name</td>
                                                                <td>{this.state.details.name}</td>
                                                            </tr>
                                                           <tr>
                                                                <td ><i class="fa fa-calendar"></i>type</td>
                                                                <td>{this.state.details.type}</td>
                                                            </tr>
                                                          <tr>
                                                                <td ><i class="fa fa-university"></i>description</td>
                                                                <td>{this.state.details.description}</td>
                                                          </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="Address" class="tab-pane fade">
                                            <div class="table-responsive panel">
                                                <table class="table">
                                                    <tbody> <tr>
                                                                <td ><i class="fa fa-home"></i> Address</td>
                                                                <td>
                                                                    <address>
                                                                        <strong>{this.state.details.address}</strong><br/> </address>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="Contact" class="tab-pane fade">
                                            <div class="table-responsive panel">
                                                <table class="table">
                                                    <tbody> 
                                                            <tr>
                                                                <td ><i class="glyphicon glyphicon-phone"></i> Mobile Number</td>
                                                                <td>{this.state.details.phoneNumber}</td>
                                                            </tr></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
             
                
            </div>
        </div>

	);



}}
export default CardDetails;