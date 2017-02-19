const initialState = {
  clientID: '',
	timestamp: 0,
	arrClientID: [],
};

export default function newclientform(state = initialState, action) {
  switch (action.type) {
		case 'SET_CLIENT_ID':
      return { ...state, clientID: action.payload};
		case 'ADD_CLIENT_FORM':
			return { ...state, timestamp: action.payload, arrClientID: [...state.arrClientID, state.clientID]};
  default:
    return state;
	}
}
