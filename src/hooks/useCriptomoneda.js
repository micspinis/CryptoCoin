import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

// styled components
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;


// Crearemos una funcion dentro del hook, lo que este dentro de esta funcion es lo que se va a mostrar en pantalla, y lo que este afuer (arriba de la funcion) será el state, donde podemos hacer operaciones etc. Es algo similar a los componente, donde dentro del return Mostramos, y fuera del el usamos JS.

// Hemos visto que en los states retornarmos dos valores (el state, y la función que modifica el state) entonces al crear nuestro custom hook debemos hacer que se retornen esos dos valores, para logragar usamos tambien useState. 

const useCriptomoneda = ( label, stateInicial, opciones ) => {

    // state de nuestro custom hook
    const [ state, actualizarState ] = useState(stateInicial);

    const SelectCripto = (params) => (
        <Fragment>
            <Label> {label} </Label>
            <Select
                onChange={ e => actualizarState(e.target.value) }
                value={state}
            >
                <option value="">- Seleccione -</option>
                {opciones.map( opcion => (<option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} >{opcion.CoinInfo.FullName}</option>) )}
            </Select>
        </Fragment>
    );
    
    // Retornar state, interfaz y funcion que modifica el state.
    return [ state, SelectCripto, actualizarState ];
}

export default useCriptomoneda;