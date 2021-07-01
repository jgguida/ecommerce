import React from 'react'
import prod from '../Products'
import Product from '../components/Product'

export default function () {
   return (
        <div>
            <div className="row justify-content-center">
                {prod.map(prod=> {
                    return <Product prod={prod}/>
                })}
            </div>
        </div>
   )}