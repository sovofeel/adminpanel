import AppCnstns  from '../constans'

const initialState = {
  IP: window.IP === AppCnstns.MY_IP,
  admin_one: '',
  admin_two: '',
  adminNames: []
};

export default function startcasting(state = initialState, action) {
  switch (action.type) {
		case 'SET_ADMIN_NAME':
    if (action.payload.adminNbr === "admin_one")
      return  {...state, admin_one: action.payload.adminName};
    else if (action.payload.adminNbr === "admin_two")
      return  {...state, admin_two: action.payload.adminName};

    break;
    case 'ENTER_IN_PANEL':
      //Вход в панель
      if (state.admin_one && state.admin_two) {
        console.log('Вход выполнен');
        console.log('Совпадение IP', state.IP);
        console.log('Первый админ:', state.admin_one);
        console.log('Второй админ:', state.admin_two);
        return {...state, adminNames:[state.admin_one, state.admin_two] }
      } else {
        console.log('Вход не выполнен');
        console.log('Совпадение IP', state.IP);
        console.log('Первый админ:', state.admin_one);
        console.log('Второй админ:', state.admin_two);
      }
      return state;

    default:
      return state;
    }
}
