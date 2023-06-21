
import './Fila.css';

export default function Fila({info}) {

    // convierto las letras en descripción
    let var_tipo = info.tipo;
    if (info.tipo==="c") {var_tipo="comida";}
    if (info.tipo==="b") {var_tipo="bebida";}
    if (info.tipo==="p") {var_tipo="postre";}

    return(
        <tr>
            {/* <td><img src={'./imagenes/' + info.imagen} className="card-small" alt={info.titulo}/></td> */}
            <td className="centrado">{info.codigo}</td>
            <td>{var_tipo}</td>
            <td>{info.titulo}</td>
            <td>{info.nota}</td>
            <td>{info.descripcion}</td>
            <td className="derecha">{info.precio}</td>
            {/* </td><td className="centrado">{info.activo} */}
            {/* </td><td><button className="btn btn-edit" type="button" onClick="">Editar</button> */}
            <td>
              <form method="get" action="./edit">
                <input type="hidden" id="custId" name="cod" value={info.codigo} />
                <input className="btn btn-edit" type="submit" value="Editar" />
              </form>
              <form method="get" action="./del">
                <input type="hidden" id="custId" name="cod" value={info.codigo} />
                <input className="btn btn-del" type="submit" value="Borrar" />
              </form>
            </td>
        </tr>
    )
}

// el boton debe llamar la pagina http://localhost:3000/edit?cod=201


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
