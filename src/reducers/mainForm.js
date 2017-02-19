const initialState = {
  clientID: '',
  clientCount: 0,
  hookah400: 0,
  hookah500: 0,
  hookah700: 0,
  timeHasPassed: 0,
  perClient: 0,
  totalPrice: 0,
  payType: 'none',
};


export default function mainform(state = initialState, action) {
	switch (action.type) {
		case 'CREATE_NEW_FORM':
			return { ...state, clientID: action.payload };
		default:
			return state;
	}
}