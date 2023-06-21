import{useEffect, useState} from 'react';
import Card from '../Card/Card';

export default function Menu3() {
    let [datos,setDatos]=useState([]);
    
    const traerInfo=async()=>{
        console.log("peticion de info");
        let info= await fetch("http://localhost:4000/menu/p")
                        .then(respuesta => respuesta.json())
                        .then(data => setDatos(data))
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
    }
    useEffect(()=>{ traerInfo() },[])
    return(
        <div className='section-cards d-flex justify-content-center flex-wrap'>
            {datos.map((dato)=>{ return <Card key={dato.codigo} info={dato}/> })} 
        </div>
    )
}
