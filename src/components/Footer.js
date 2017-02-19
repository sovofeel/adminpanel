import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  AdmNameOnFocus(e) {
    let adminName = e.target.value
    let adminNbr = e.target.name
    this.props.pushAdminName({adminName, adminNbr});
  }

  clickInEnter() {
    this.props.enterInPanel()
  }

  render() {

    const AdmNameOnFocus = this.AdmNameOnFocus.bind(this);
    const clickInEnter = this.clickInEnter.bind(this);
    return (
      <footer className="footer">
        <div className="money">
          <span>Выручка: <span className="money-receipt">15000</span></span>
          <span>Касса: <span className="money-incash">15000</span></span>
        </div>
        <input type="text" value={this.value} onBlur={AdmNameOnFocus} className="input-admin" name="admin_one" placeholder="Первый админ" />
        <input type="text" value={this.value} onBlur={AdmNameOnFocus} className="input-admin" name="admin_two" placeholder="Второй админ" />
        <button type="button" onClick={clickInEnter} className="button-submit button-finish" name="button">Открыть смену</button>
      </footer>
    )
  }
}

export default Footer;
