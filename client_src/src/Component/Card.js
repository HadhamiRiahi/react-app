import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component {
   
  render() {
   
    return (      

        <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={this.props.item.image} alt="card" ></img>
          <div className="card-body"> 
          <h3>{this.props.item.name}</h3>
          <p className="card-text">{this.props.item.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`/cards/details/${this.props.item.id}`}>View </Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`/cards/edit/${this.props.item.id}`}>Edit</Link></button>
              </div>
              <small className="text-muted">{this.props.item.type}</small>
            </div>
          </div>
        </div>
        </div>
        
      
     
    );
  }
}

export default Card ;




