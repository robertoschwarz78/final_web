import './Card.css';;

export default function Card({info}) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" >
            <div className="card">
            {/* <img src={'./imagenes/' + info.imagen} className="card-img-top" alt={info.titulo}/> */}
                <div className="card-body">
                    <p className='card-text0'>{info.titulo} </p>
                    <p className='card-text1'>{info.nota} </p>
                    <p className='card-text2'>{info.descripcion} </p>
                {info.activo === 1? 
                    <p className='card-text4'>NO DISPONIBLE</p>
                :
                    <p className='card-text3'>Precio: {info.precio}</p>
                }
                    <p className='card-text5'>Cod: {info.codigo}</p>
                </div>
            </div>
        </div>
    )
}

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