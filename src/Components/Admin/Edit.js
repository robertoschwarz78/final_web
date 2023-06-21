/*

uso http://localhost:3000/edit?cod=201

*/

import {Fragment, useState, useEffect} from 'react';
import './Admin.css';

export default function Edit() {
  const[mensajeOculto,setMensajeOculto]=useState(true);
  const [datosCompletos,setDatosCompletos]=useState([]);
  
  const searchParams = new URLSearchParams(document.location.search)
  const codigoEdit = searchParams.get('cod');
  var itemArray = [];
  let tipo1 = false;
  let tipo2 = false;
  let tipo3 = false;
  let tipo4 = false;

  const traerInfo=async()=>{
    // console.log("peticion para el cod: " + codigo);
    // let info= await fetch("http://localhost:4000/item/" + codigoEdit)
    let info= await fetch("http://localhost:4000/menu")
                    .then(respuesta => respuesta.json())
                    .then(data => setDatosCompletos(data))
                    .catch(error => console.log("HAY UN ERROR!!" + error))
    return info
  }

  useEffect(()=>{
    console.log("Filtrando item " + codigoEdit);
    traerInfo()
    console.dir(datosCompletos);
  },[])

    
  let filtrado = datosCompletos.filter((ch) => ch.codigo == codigoEdit);
  if(filtrado.length > 0) {
    console.log("Es un array.");
    itemArray = filtrado[0];
    document.getElementById("titulo").value = itemArray.titulo;
    document.getElementById("nota").value = itemArray.nota;
    document.getElementById("descripcion").value = itemArray.descripcion;
    document.getElementById("precio").value = itemArray.precio;
    if (itemArray.tipo === 'c') {tipo1 = true}
    if (itemArray.tipo === 'b') {tipo2 = true}
    if (itemArray.tipo === 'p') {tipo3 = true}
    if (itemArray.tipo === 'o') {tipo4 = true}
  } else {
    console.log("No un array.");
  };

  
  const cargarItem=async (event)=>{

    event.preventDefault();

    const form=JSON.stringify({
      "codigo":event.target[0].value,
      "tipo":event.target[1].value,
      "titulo":event.target[2].value,
      "nota":event.target[3].value,
      "descripcion":event.target[4].value,
      "precio":event.target[5].value,
      // "activo":event.target[6].value, // boolean, revisar
      // "activo":0,
      // "imagen":event.target[7].value,
    })
    console.log("Enviando datos:");
    console.dir(form);
 
    const response = await fetch('http://localhost:4000/modificar',{
        method:'PUT',
        headers:{ 'Content-Type': 'application/json' },
        body:form,
    })

    console.dir(response);
    if(response.ok){
      setMensajeOculto(false);
    } else {
      window.alert("Error! " + response.statusText);
    }
  }

  return (
    <Fragment>
    <main>
      <div className="d-flex flex-column align-items-center">
        <h1>Panel Admin</h1>
        <h3>Modifique el item</h3>
      </div>
    { mensajeOculto === true?

      <div className='section-cards d-flex justify-content-center flex-wrap'>
        <form className=" w-75 mb-6" onSubmit={(event)=>{cargarItem(event)}} method="POST">
            
            <div className="mb-1">
                <label htmlFor="codigo" className="form-label">Código</label>
                <input type="number" name="codigo" className="form-control" aria-label="titulo del plato" id="codigo" min="1" value={itemArray.codigo} readOnly required/>
            </div>

            <div className="mb-1">
                <label htmlFor="tipo" className="form-label">Tipo de item:</label>
                <select className="form-select" aria-label="Tipo de plato" name="tipo" id='tipo' required>
                    {tipo1 ? <option value="c" selected>Comida</option> : <option value="c" >Comida</option>}
                    {tipo2 ? <option value="b" selected>Bebida</option> : <option value="b" >Bebida</option>}
                    {tipo3 ? <option value="p" selected>Postre</option> : <option value="p" >Postre</option>}
                    {tipo4 ? <option value="o" selected>Otros </option> : <option value="o" >Otros </option>}
                </select>
            </div>

            <div className="mb-1">
                <label htmlFor="titulo" className="form-label">Titulo</label>
                <input type="text" className="form-control"  aria-label="Título del plato" id="titulo" name="titulo" placeholder={itemArray.titulo} required/>
            </div>

            <div className="mb-1">
                <label htmlFor="nota" className="form-label">Nota</label>
                <input type="text" className="form-control" aria-label="Nota" id="nota" name="nota2" placeholder={itemArray.nota} required/>
            </div>
            
            <div className="mb-1">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <input type="text" className="form-control" aria-label="Descripcion" id="descripcion" name="descripcion" placeholder={itemArray.descripcion} required/>
            </div>
            
            <div className="mb-1">
                <label htmlFor="precio" className="form-label">Precio</label>
            <input type="number" className="form-control" aria-label="Precio" id="precio" name="precio" min="0" placeholder={itemArray.precio} required/>
            </div>

            {/* <input type='file' name="imagen" id=''/> */}

            <button type="submit" className="btn btn-success" >Guardar Cambios</button>
            
        </form>
      </div>
    :
    <div className="d-flex flex-column align-items-center">
        <h3>Item actulizado!</h3>
        <form method="get" action="./admin">
          <input className="btn btn2" type="submit" value="Volver al menú" />
        </form>
    </div>
    }

    </main>
    </Fragment>
  );
}
