import {Fragment, useState} from 'react';
import './Add.css';

export default function Add() {
    const[mensajeOculto,setMensajeOculto]=useState(true);

    const cargarItem=async (event)=>{

        event.preventDefault();

        /*
        codigo (int) primary key
        tipo (char-1)
        imagen (varchar)
        titulo (varchar)
        nota (varchar)
        descripcion (varchar)
        precio (int)
        activo (boolean)
        */

        const form=JSON.stringify({
            "codigo":event.target[0].value,
            "tipo":event.target[1].value,
            "titulo":event.target[2].value,
            "nota":event.target[3].value,
            "descripcion":event.target[4].value,
            "precio":event.target[5].value,
            // "activo":event.target[6].value, // boolean, revisar
            "activo":0,
            // "imagen":event.target[7].value,
        })
        console.dir(form);
       
        // lee el menu completo para ver codigos
        const response= await fetch('http://localhost:4000/agregar',{
            method:'POST',
            body:form,
            headers:{
                'Content-Type': 'application/json',
            }
        })

        if(response.ok){
          //  en la response voy a tener el token que lo voy a guardar  en una variable
            setMensajeOculto(false);
        } else {
            if(response.status === 304){
                window.alert("Error! Ese código ya está en uso.");
            } else {
                window.alert("Error! " + response.statusText);
                console.dir(response);
            }

        }
    }
    return(
    <Fragment>
        <h3>Carga de nuevo item</h3>
    { mensajeOculto === true? 
        <form className=" w-75 mb-6" onSubmit={(event)=>{cargarItem(event)}} method="POST">
            
            <div className="mb-1">
                <label htmlFor="codigo" className="form-label">Código</label>
                <input type="number" name="codigo" className="form-control" aria-label="titulo del plato" id="codigo" min="1" required/>
            </div>

            <div className="mb-1">
                <label htmlFor="tipo" className="form-label">Tipo de item</label>
                <select className="form-select" aria-label="Tipo de plato" name="tipo" id='tipo' required>
                    <option defaultValue="" placeholder="123-45-678"></option>
                    <option value="c">Comida</option>
                    <option value="b">Bebida</option>
                    <option value="p">Postre</option>
                    <option value="o">Otros</option>
                </select>
            </div>

            <div className="mb-1">
                <label htmlFor="titulo" className="form-label">Titulo</label>
                <input type="text" className="form-control"  aria-label="Título del plato" id="titulo" name="titulo" required />
            </div>

            <div className="mb-1">
                <label htmlFor="nota" className="form-label">Nota</label>
                <input type="text" className="form-control" id="nota" name="nota" required/>
            </div>
            
            <div className="mb-1">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <input type="text" className="form-control" id="descripcion" name="descripcion" required/>
            </div>
            
            <div className="mb-1">
                <label htmlFor="precio" className="form-label">Precio</label>
            <input type="number" className="form-control" id="precio" name="precio" min="0" required/>
            </div>

            {/* <input type='file' name="imagen" id=''/> */}

            <button type="submit" className="btn btn-success" >Agregar Item</button>
        </form>
       :
        <div className="d-flex flex-column align-items-center">
            <h3>Item actulizado!</h3>
            <form method="get" action="./admin">
            <input className="btn btn2" type="submit" value="Volver al menú" />
            </form>
        </div>
    }
    </Fragment>

    )
}

