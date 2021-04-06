import React, { Component } from 'react';

class Card extends Component {
  
  render() {
    return (
      <div className="card-base">
        <div className="card-img">
          <label className="card-label">{this.props.insurance.price}</label>
          <img src={this.props.insurance.image} alt="card-img"/>
        </div>
        <div className="card-body">
          <h1 className="card-title">{this.props.insurance.name} </h1>
          <p className="card-text"> {this.props.insurance.description} </p>
        </div>
      </div>
    )
  }
}


export default Card;
