import Listado from './Listado.js';
import Add from './Add';
import {useState} from 'react';
import './Admin.css';

function Admin() {

  const[form1,oculta1]=useState(true); // por si en el futuro quiero agregar un login
  const[form2,oculta2]=useState(false);
  const[form3,oculta3]=useState(true);
  const[form4,oculta4]=useState(true); // por si en el futuro quiero agregar otra cosa

  return (
    <main>
      <div className="d-flex flex-column align-items-center">
        <h1>Panel Admin</h1>
        {/* <h3>Desde el listado podrá eliminar elementos</h3> */}
        <div>
          <button className="btn btn2" type="button" onClick={()=>{oculta1(true) ;oculta2(false);oculta3(true) ;oculta4(true) }}>Listado completo</button>
          <button className="btn btn2" type="button" onClick={()=>{oculta1(true) ;oculta2(true) ;oculta3(false);oculta4(true) }}>Agrega item al menú</button>
        </div>
      </div>
      <div className='section-cards d-flex justify-content-center flex-wrap'>

    {form2 === false? 
      <section className='row'>
          <Listado />
      </section>:''}

    {form3 === false? 
      <section className='row'>
          <Add />
      </section>:''}

      </div>
    </main>
  );
}

export default Admin;
