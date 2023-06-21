import{useEffect, useState} from 'react';
import Fila from '../Form/Fila.js';
import './Listado.css';


export default function Listado() {
    let [datos,setDatos]=useState([]);

    const traerInfo=async()=>{
        console.log("peticion de info");
        let info= await fetch("http://localhost:4000/menu")
                        .then(respuesta => respuesta.json())
                        .then(data => setDatos(data))
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
    }

    useEffect(()=>{
        traerInfo() 
     },[])

     return(
        <div className='tabla'>
            <table>
            <thead>
                <tr>
                    {/* <td className="h">Foto</td> */}
                    <td className="h">Codigo</td>
                    <td className="h">Tipo</td>
                    <td className="h">Nombre</td>
                    <td className="h">Nota</td>
                    <td className="h">Descripcion</td>
                    <td className="h">Precio</td>
                    {/* <td className="h">Activo</td> */}
                    <td className="h">Acción</td>
                </tr>
            </thead>
            <tbody>
                    {datos.map((dato)=>{ 
                        return <Fila key={dato.codigo} info={dato}/>
                    })}
            </tbody>        
            </table>
        </div>
    )
    
}