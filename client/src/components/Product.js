import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import prod from "../Products";

export default function Product({ prod }) {
  return (
    <div className="col-md-3 m-5  bg-white shadow rounded p-2">
      <div>
        <Link to={`product/${prod.id}`}>
          <img src={prod.image} className="img-fluid" alt=""></img>
          <h1>{prod.name}</h1>
          <p>
          <Rating name="read-only" value={prod.rating} readOnly />
          </p>
          <h1>Preco R${prod.price}</h1>
        </Link>
      </div>
    </div>
  );
}
