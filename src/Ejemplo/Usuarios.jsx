import { Datos } from './Datos'
import { Usuario } from './Usuario'
export function Ejemplo(){
    return(
        <>
        {Datos.map(function(dato,i){return <Usuario data={dato} key={i}></Usuario>})}
        </>
    )
}