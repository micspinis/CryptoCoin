import React from 'react';
import styled from '@emotion/styled';

// Custon hook
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;


const Formulario = () => {

    // Lista de monedas
    const MONEDAS = [
        {codigo:'USD', nombre:'Dolar americano'},
        {codigo:'MXN', nombre:'Peso Mexicano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GBP', nombre:'Libra Esterlina'}
    ]

    // Usando custon hook useMoneda
    const [ moneda, SelectMonedas ] = useMoneda("Elije tu Moneda", "", MONEDAS);

    // Usando custom hook useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elije tu criptomoneda', '');

    return ( 
        <form>
            
            <SelectMonedas />

            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;