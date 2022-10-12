import "../styles.css";
import react, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home(p) {
  let location = useLocation();
  return (
    <div>
      <input
        className="input"
        type="text"
        value={p.nc}
        placeholder="Class"
        onChange={(e) => p.sc(e.target.value)}
      />
      <input
        className="input"
        type="text"
        value={p.ng}
        placeholder="Grade"
        onChange={(e) => p.sg(e.target.value)}
      />
      <input
        className="input"
        type="text"
        value={p.nw}
        placeholder="Weight (2/1.5)"
        onChange={(e) => p.sw(e.target.value)}
      />
      <button onClick={p.new} className="input">
        Submit
      </button>
    </div>
  );
}
