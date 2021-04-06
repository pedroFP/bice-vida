import React, { Component } from 'react';

class Card extends Component {

  state = {
    name: '',
    description: '',
    price: '',
    image: ''
  };

  async componentDidMount() { 
    const url = 'https://dn8mlk7hdujby.cloudfront.net/interview/insurance/59';
    const response = await fetch(url);
    const data = await response.json();
    this.setState(data.insurance);
   }
  
  render() {
    return (
      <div className="card-base">
        <div className="card-img">
          <label className="card-label">{this.state.price}</label>
          <img src={this.state.image} alt="card-img"/>
        </div>
        <div className="card-body">
          <h1 className="card-title">{this.state.name} </h1>
          <p className="card-text"> {this.state.description} </p>
        </div>
      </div>
    )
  }
}


export default Card;
