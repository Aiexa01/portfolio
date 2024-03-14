export function Usuario({ data }) {
    return (
       <>
       <span>DNI : {data.dni} </span>
       <span> Nombre : {data.nombre} </span>
       <span> Apellido: {data.apellido}</span>
       <span>Edad: {data.edad}</span>
       <span>Telefono: {data.telefono}</span>
       <span>Direcction: {data.direccion}</span>
       </>

    )
}