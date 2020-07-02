import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';

import axios from 'axios'; 

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;



function App() {

  // state
  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');


  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // Evitar la ejecucion la primera vez
      if(moneda==='') return;

      // Consultar la API para obtener la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
    }     
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);


  return (
    <Contenedor>
        <div>
          <Imagen 
            src={imagen}
            alt="Imagen crypto"
          />
        </div>
        <div>
          <Heading>Cotiza CryptoMonedas al Instante</Heading>
          <Formulario 
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          /> 
        </div>
    </Contenedor>
  );
}

export default App;
