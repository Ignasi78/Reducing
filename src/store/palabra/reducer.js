// un reducer sirve para modificar de forma efectiva o que hay en la store
// de manera que el action recoge el recado de lo que hay que modificar
// pero es el reducer el que lo modifica

const initialState = { palabra: "" };

// action es el valor devuelto por el action
// action.payload es el valor que quiero añadir o borrar
export default (state = initialState, action) => {
    if (action.type === 'UPDATE_WORD') {
        return {
            ... state, // el nuevo valor no toca los demas parametros datos
            palabra: action.payload  // pero modifica dato palabra con contenido que ordena action
        }
    }
    // un reducer devuelve-informa de lo que se quedará en el state después de grabar
    return state;
}

// al exportar, si pusieramos default, no deberiamos poner entre llaves al importar en palabra.js
export const selectActiveWord = state => state.palabraReducer.palabra;

// OK