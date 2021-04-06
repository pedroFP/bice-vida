import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class Select extends Component {

  constructor(props) {
    super(props)
    this.displayInsurance = this.displayInsurance.bind(this);
    this.saveSelection = this.saveSelection.bind(this);
    this.state = {
      selectedOption: null,
      insurances: [
        { id: 58, plan_name: 'Seguro Vida Activa' },
        { id: 59, plan_name: 'Seguro Viaje Protegido' }
      ]
    }
  }

  displayInsurance(props) {
    var id = this.state.selectedOption
    const url = 'https://dn8mlk7hdujby.cloudfront.net/interview/insurance/' + id;
    fetch(url).then(response => response.json())
      .then(data => {
        var card = <Card insurance={data.insurance}/>
        ReactDOM.render(card, document.getElementById('insurances'))
      })
  }

  saveSelection(props) {
    this.setState({
      selectedOption: props.target.value
    })
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-6 selector">
          <label htmlFor="insurance-plans">
            <strong>
              Selector de plan
            </strong>
          </label>
          <br/>
          <select name="insurance-plans" onChange={this.saveSelection}>
            <option disabled selected value> -- select an option -- </option>
            {
              this.state.insurances.map((element) => {
                return(
                  <option 
                  value={element.id}
                  key={element.id}>
                    {element.plan_name}
                    </option>
                )
              })
            }
          </select>
        </div>
        <div className="col-6">
          <button onClick={this.displayInsurance}>Buscar</button>
        </div>
      </div>
    )
  }
}


export default Select;
