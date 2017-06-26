export function Save(msj) {
  return {
    type: "Save",
    payload: {
      msj: msj,
    }
  }
}

export function errorLength(error){
  return {
    type:'errorLength',
    payload:{
      errorLength:error
    }
  }
}
