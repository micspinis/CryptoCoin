import React from 'react';

const Cotizacion = ({resultado}) => {
    // Si el objeto llega vacio, no se ejecuta nada
    if(Object.keys(resultado).length === 0) return null;

    return ( 
        <div>
            <p>El precio es: <span> {resultado.PRICE} </span></p>
            <p>Precio mas alto del día: <span> {resultado.HIGHDAY} </span></p>
            <p>Precio mas bajo del día: <span> {resultado.LOWDAY} </span></p>
            <p>Variación últimas 24 hrs: <span> {resultado.CHANGEPCT24HOUR} </span></p>
            <p>Última Actualización: <span> {resultado.LASTUPDATE} </span></p>
        </div>
     );
}
 
export default Cotizacion;