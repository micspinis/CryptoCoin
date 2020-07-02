import React, { Fragment, useState } from 'react';


// Crearemos una funcion dentro del hook, lo que este dentro de esta funcion es lo que se va a mostrar en pantalla, y lo que este afuer (arriba de la funcion) será el state, donde podemos hacer operaciones etc. Es algo similar a los componente, donde dentro del return Mostramos, y fuera del el usamos JS.

// Hemos visto que en los states retornarmos dos valores (el state, y la función que modifica el state) entonces al crear nuestro custom hook debemos hacer que se retornen esos dos valores, para logragar usamos tambien useState. 

const useMoneda = ( label, stateInicial, opciones ) => {

    // state de nuestro custom hook
    const [ state, actualizarState ] = useState(stateInicial);


    const Seleccionar = (params) => (
        <Fragment>
            <label> {label} </label>
            <select>
                <option value="">- Seleccione -</option>
                {opciones.map( opcion => (<option value={opcion.codigo} >{opcion.nombre}</option>) )}
            </select>
        </Fragment>
    );
    
    // Retornar state, interfaz y funcion que modifica el state.
    return [ state, Seleccionar, actualizarState ];
}

export default useMoneda;