import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// Custon hook
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
// Axios
import axios from 'axios';

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

    // state del listado de criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([]);

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
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elije tu criptomoneda', '', listacripto);

    // Ejecutar llamado a la API
    // Recordar que aqui la consulta la haces con axios
    useEffect( () => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url)

            guardarCriptomonedas(resultado.data.Data);
            

        }
        consultarAPI();
    }, []);

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