import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

export default function ScaFc({ header, main, footer }) {
  const context = useContext(CounterContext);
  console.log(context);
  return (
    <>
      <p>{JSON.stringify(context)}</p>
      {/* <nav>{header}</nav>
      <main>{main}</main>
      <footer>{footer}</footer> */}
    </>
  );
}
