import React from "react";
import { useParams } from "react-router";

export function Details() {
  let { id } = useParams();

  return (
    <div>
      <h1>Details {id}</h1>
    </div>
  );
}
