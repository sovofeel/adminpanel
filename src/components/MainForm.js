import React, { Component } from 'react';
import './MainForm.css'

export default class MainForm extends Component {

  render() {
		const arrClientID = this.props.arrClientID;

		const formList = arrClientID.map((id, index) =>
				<form key={index} className="main_form">
					<div className="main_form main_form-guest">{id}</div>
					<div className="main_form main_form-count">
						<input className="count-input" type="text" value={this.value} placeholder="0" required />
					</div>
					<div className="main_form main_form-hookah">
						<label>400
							<input className="hookah-input hookah-input--400" value={this.value} type="text" />
						</label>
						<label>500
							<input className="hookah-input hookah-input--500" value={this.value} type="text" />
						</label>
						<label>600
							<input className="hookah-input hookah-input--600" value={this.value} type="text" />
						</label>
					</div>
					<div className="main_form main_form-time">2:30</div>
					<div className="main_form main_form-human">
						100 P
					</div>
					<div className="main_form main_form-price">
						450 р
					</div>
					<div className="main_form main_form-buttons">
						<button className="main_form-button button-submit" data-button="cash" type="submit" name="button">Наличка</button>
						<button className="main_form-button button-submit" data-button="card" type="submit" name="button">Карта</button>
						<a className="button-reset" data-button="reset" type="button" name="button">X</a>
					</div>
				</form>
				);


    return (
        <div className="main_form-wrapper">
					{formList}
        </div>
    )
  }
};
