import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Navigation from '../components/Navigation'
import NewClientForm from '../components/NewClientForm'
import FormTitle from '../components/FormTitle'
import MainForm from '../components/MainForm'
import Footer from '../components/Footer'

import actions from '../actions'
import './App.css'




class App extends Component {
  render() {
    const { arrClientID, newClientForm } = this.props;
    const { setClientID, addClientForm, pushAdminName, enterInPanel } = this.props.actions;

    // Если IP совпадает и кол-во админов 2
    const toMainRender = (this.props.startCasting.IP && this.props.startCasting.adminNames.length === 2)

    return (
      <div className="App">
        {toMainRender ? <div className={'main'}>
          <Navigation/>
          <NewClientForm timestamp={actions.timestamp} addClientForm={addClientForm} arrClientID={arrClientID} clientID={actions.clientID} setClientID={setClientID} />
          <FormTitle/>
          <MainForm arrClientID={newClientForm.arrClientID} />
        </div> : <div></div>}
        <Footer enterInPanel={enterInPanel} pushAdminName={pushAdminName}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainForm: state.mainform,
    newClientForm: state.newclientform,
    startCasting: state.startcasting
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
