import React, {useRef} from 'react';
import updateWord from '../../store/palabra/action';
import {connect} from "react-redux";

// un componente que accede a un estado de Redux debe recibirlo como prop
// si no lo hacemos el codigo no da error, pero tampoco funciona
const Form = ({updateWord}) => {
    const palabraRef = useRef(null);
    return <div className='entrada'>
        <h1>Reducing</h1>
        <img src="./redux.png" alt="redux icon" />
        <h3>studying Redux</h3>
        <input type="text" ref={palabraRef}/>
        <button onClick={ () => {updateWord(palabraRef.current.value)}}>Guardar en store</button>
        <br></br>
        <hr></hr>               
    </div>
}

// exportamos Form, pero claro, debe estar conectado con Redux para recibir 
// la prop de arriba, updateWorld, pero que esta dentro del action.js (dispacher)
// entonces le pasamos como parametro las 2 funciones (stateToProps y DispatchToProps)
export default connect(null, {updateWord})(Form);

// OK