import { useState, useRef, useCallback } from "react";
import "./styles.css";
import Card from "./component/card";
import { Cars } from "./Cars";

export default function App() {
  const [car, setCard] = useState(Cars[0]);
  const i = useRef(0);
  const onNext = useCallback(() => {
    if (Cars.length === i.current) {
      return false;
    }
    i.current++;
    console.log("index ", i.current);
    setCard(Cars[i.current]);
  }, [car]);
  const onPrv = useCallback(() => {
    if (i.current === 0) return false;
    i.current--;
    console.log("index ", i.current);
    setCard(Cars[i.current]);
  }, [car]);
  return (
    <div>
      <h1>Car Logos with Country Flag</h1>
      <Card car={car} />
      <div>
        <button className="prv" disabled={i.current === 0} onClick={onPrv}>
          Back
        </button>
        <button
          className="next"
          disabled={i.current === Cars.length - 1}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
