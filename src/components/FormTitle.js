import React, { Component } from 'react';
import './FormTitle.css'

class FormTitle extends Component {
  render() {
    return (
      <div className="form_title-wrapper">
        <b className="form_title form_title-guest">Гость</b>
        <b className="form_title form_title-count">Кол-во</b>
        <b className="form_title form_title-hookah">Кальяны</b>
        <b className="form_title form_title-time">Время</b>
        <b className="form_title form_title-human">За чел</b>
        <b className="form_title form_title-price">К оплате</b>
      </div>
  );
  }
}

export default FormTitle;
