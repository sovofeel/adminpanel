import { combineReducers } from 'redux'
import mainform from './mainForm'
import newclientform from './newClientForm'
import startcasting from './startCasting'

export default combineReducers({
  mainform,
  newclientform,
  startcasting
})
