import React from "react";

export function TextContainer({ children }) {
  return <div className="shadow-lg rounded bg-slate-700 hover:bg-slate-800 p-8 text-justify text-lg text-white italic">
    { children }
  </div>;
}
