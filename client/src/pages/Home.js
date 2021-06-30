import React from 'react'
import prod from '../Products'

export default function () {
    return (
        <div>
            <div className="row justify-content-center">
                {prod.map(prod=>{
                    return <div className="col-md-3 m-5">
                        <h1>{prod.name}</h1>
                        <img src={prod.image} className='img-fluid'></img>
                        <h1>Rating {prod.rating}</h1>
                        <h1>Preco R${prod.price}</h1>
                        
                    </div>
                })}
            </div>
        </div>
    )
}
