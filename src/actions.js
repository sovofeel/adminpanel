let actions = {
    setClientID: (id) => {
     return {
       type: 'SET_CLIENT_ID',
       payload: id
     }
   },

    addClientForm: (timestamp) => {
     return {
       type: 'ADD_CLIENT_FORM',
       payload: timestamp
     }
   },

   pushAdminName: (payload = {}) => {
    return {
      type: 'SET_ADMIN_NAME',
      payload: payload
    }
  },

  enterInPanel: () => {
   return {
     type: 'ENTER_IN_PANEL',
   }
 }

}

export default actions;
