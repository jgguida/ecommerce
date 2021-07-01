import React from 'react'

export default function Product({prod}) {
    return (
        <div className="col-md-3 m-5 bg-white shadow rounded p-2">
            <div>
                        <img src={prod.image} className="img-fluid" alt=""></img>
                        <h1>{prod.name}</h1>
                        <h1>Rating {prod.rating}</h1>
                        <h1>Preco R${prod.price}</h1>
                        
             </div>
             </div>
     )
    }            
