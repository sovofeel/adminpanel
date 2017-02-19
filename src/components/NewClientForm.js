import React, { Component } from 'react';
import './NewClientForm.css';

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

export default class NewClientForm extends Component {
  clientInpChange(e) {
		let inpValue =  e.target.value;
		this.props.setClientID(inpValue);

	}

	createNewForm(e) {
		e.preventDefault();
		const date = new Date().getTime();
		this.props.addClientForm(date);
    document.querySelector('.new-clientInp').value = ''

  }

  render() {
    const { clientID } = this.props;
    const clientInpChange = this.clientInpChange.bind(this);
    const createNewForm = this.createNewForm.bind(this);

    return (
      <form onSubmit={ createNewForm } className="newClient_form">
        <input type="text"
							 ref="clientInp"
							 className="new-clientInp"
							 value={ clientID }
							 onChange={ clientInpChange }
							 placeholder="4 цифры или событие" required />
        <button  className="new-clientBtn button-submit">Гоу!</button>
      </form>
    )
  }
}
