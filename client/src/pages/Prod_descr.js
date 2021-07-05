import React from 'react'
import prod from '../Products'
export default function Prod_descr({match}) {
    const productid = match.params.id
    return (
        <div>
            <h1>Pagina de Descrição do produto</h1>
            <h1>O id do poduto é {productid}</h1>
        </div>
    )
}
