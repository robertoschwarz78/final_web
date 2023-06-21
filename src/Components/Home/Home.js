
import Menu1 from './Menu1.js';
import Menu2 from './Menu2.js';
import Menu3 from './Menu3.js';
import {useState} from 'react';
import './Home.css';

function Home() {

  const[lista1,ocultalista1]=useState(true);
  const[lista2,ocultalista2]=useState(true);
  const[lista3,ocultalista3]=useState(true);

  return (
    <main>
      <div className="d-flex flex-column align-items-center">
        <h1>NAV-Bar Menu</h1>
        <div>
          <button className="btn btn-menu" type="button" onClick={()=>{ocultalista1(false);ocultalista2(true) ;ocultalista3(true) }}>Comidas</button>
          <button className="btn btn-menu" type="button" onClick={()=>{ocultalista1(true) ;ocultalista2(false);ocultalista3(true) }}>Bebidas</button>
          <button className="btn btn-menu" type="button" onClick={()=>{ocultalista1(true) ;ocultalista2(true) ;ocultalista3(false)}}>Postres</button>
        </div>
      </div>
  {lista1 === false? 
      <section className='row'>
          <Menu1 />
      </section>:''}

  {lista2 === false? 
      <section className='row'>
          <Menu2 />
      </section>:''}

  {lista3 === false? 
      <section className='row'>
          <Menu3 />
      </section>:''}
    
    </main>
  );
}

export default Home;
