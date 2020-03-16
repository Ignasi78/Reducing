import React from 'react';
// como en Reducer de Store de Palabra no hemos usado export 'default' entonces aqui hace falta {llaves}
import {selectActiveWord} from '../../store/palabra/reducer';
import {connect} from "react-redux";

const Palabra = ({palabra}) => <div className='resultado'>{palabra}</div>

// la arrow function recoge un valor 'state' 
const mapStateToProps = state =>{
    return{
        // informa a 'palabra' el valor que le llega como 'state'
        palabra: selectActiveWord(state) // state.palabraReducer.palabra
    }
}

// no necesito el segundo parametro (dispatch) pq no vamos a modificar (actions) la store
// el primer parametro es el nombre de la funcion que necesito para acceder a la store
export default connect(mapStateToProps)(Palabra);

// OK