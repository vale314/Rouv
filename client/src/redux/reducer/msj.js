export default function reducer(state={
    user: {
      msj: null,
    },

  }, action) {

    switch (action.type) {
      case "Save": {
        return {...state, msj: action.payload}
      }
      case "Delete": {
        return {...state, msj: ''}
      }

    }

    return state
}
