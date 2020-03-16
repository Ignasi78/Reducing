// metodo updateWord, que recibe como parametro de entrada lo que quiero actualizar
// nos devolvera un objeto con dos parametros:  
//    el type: para definir la operacion que queremos hacer
//    el dato: payload, que es el dato a modificar

const updateWord = palabra => {
    console.log(palabra);
    return {
        type: 'UPDATE_WORD',
        payload: palabra
    }
}

// exportamos esta funcion, que vamos a invocar desde el formulario
export default updateWord;

// OK