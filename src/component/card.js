import React from "react";

export default function Card({ car }) {
  return (
    <div>
      <figure>
        <img src={car.logo} alt="car logo" />
        <figcaption className="caption">{car.name}</figcaption>
      </figure>
      <hr />
      <figure>
        <img src={car.flag} alt="car flag" />
        <figcaption className="caption">{car.country}</figcaption>
      </figure>
      <hr />
      <img src={car.carImg} alt="car" width="100%" />
    </div>
  );
}
