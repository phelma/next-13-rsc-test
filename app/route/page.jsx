"use client";

import { useContext, useState } from "react";
import { pageContext } from "../../context";

export default function Page({}) {
  const [state, setState] = useState(0);
  const c = useContext(pageContext);
  return (
    <>
      <h1>The context: {c}</h1>
      <h1>
        the counter:{" "}
        <button style={{fontSize: '2rem'}} onClick={() => setState((s) => s + 1)}>{state}</button>
      </h1>
    </>
  );
}
