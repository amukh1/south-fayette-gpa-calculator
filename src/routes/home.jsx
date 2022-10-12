import "../styles.css";
import react, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Inputs from "../components/inputs";

let honor_rolls = {
  highest: 4.0,
  high: 3.75,
  regular: 3.25
};

function honorRoll(a) {
    if (a >= honor_rolls.highest) {
        return "Highest Honor Roll";
    } else if (a >= honor_rolls.high) {
        return "High Honor Roll";
    } else if (a >= honor_rolls.regular) {
        return "Honor Roll";
    } else {
        return "<= Average";
    }
}

let averages = {
  "A+": 4.25,
  A: 4,
  "A-": 3.75,
  "B+": 3.25,
  B: 3.0,
  "B-": 2.75
};

export default function Home() {
  let location = useLocation();
  let [nc, sc] = useState("");
  let [ng, sg] = useState("");
  let [nw, sw] = useState("");

  let [classes, setClasses] = useState([]);
  let [qps, setqps] = useState([]);
  let [grades, Sgs] = useState([]);
  let [weights, setWeights] = useState(0);

  let [avg, setAvg] = useState(0);

  return (
    <div className="appp">
      {/* {location.pathname} */}
      <Inputs nc={nc} sc={sc} ng={ng} sg={sg} nw={nw} sw={sw} new={neww} />
      <div className="chart">
        <div className="classes x">
          {classes.map((c, d) => {
            return <div className="j">{c}</div>;
          })}
        </div>
        {/* <br /> */}
        <div className="qualitys x">
          {grades.map((c, d) => {
            return <div className="j">{c}</div>;
          })}
        </div>
        <div className="results x">
          {/* <br /> */}
          {/* {avg} */}
          {/* <br /> */}
          {/* {weights} */}
          {/* <br /> */}
          {qps.map((c, d) => {
            return <div className="j">{c}</div>;
          })}
          <hr />
          QPA: {avg / weights}
          <hr />
          {honorRoll(avg / weights)}
        </div>
      </div>
    </div>
  );
  function neww() {
    console.log("CHEZ");
    // alert();
    setWeights(parseFloat(weights) + parseFloat(nw));
    setClasses([...classes, nc]);
    setqps([...qps, averages[ng] * nw]);
    setAvg(parseFloat(avg) + parseFloat(averages[ng]) * parseFloat(nw));
    Sgs([...grades, ng]);
  }
}
