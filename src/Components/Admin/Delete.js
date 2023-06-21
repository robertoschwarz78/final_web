/*

uso http://localhost:3000/del?cod=201

*/

import {useEffect} from 'react';
import './Admin.css';

export default function Delete() {

  const searchParams = new URLSearchParams(document.location.search)
  const codigoDel = searchParams.get('cod');

  const traerInfo=async()=>{
    console.log("eticion para eliminar item " + codigoDel);
    let response = await fetch('http://localhost:4000/eliminar',{
      method:'DELETE',
      headers:{ 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'codigo': codigoDel }),
    })
    if(response.ok){
      // window.alert("Correcto " + response.ok);
    } else {
      window.alert("Error! " + response.statusText);
    }
  }

  useEffect(()=>{
      traerInfo()
  },[])

  return(
    <main>
      <div className="d-flex flex-column align-items-center">
        <h1>Panel Admin</h1>
        <div className="d-flex flex-column align-items-center">
        <h3>Item eliminado!</h3>
          <form method="get" action="./admin">
            <input className="btn btn2" type="submit" value="Volver al menú" />
          </form>
        </div>
      </div>
    </main>
  );
}
