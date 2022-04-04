import "./App.css";
import { useState, useEffect } from "react";
import Lawn from "./components/Lawn";
import Mower from "./components/Mower";
import MowerDisplay from "./components/MowerDisplay";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faArrowUp,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowDown, faArrowUp, faArrowLeft, faArrowRight);

function App() {
  // size of the lawn
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // arrays used to generate the lawn with a .map()
  const [lawnWidth, setLawnWidth] = useState([]);
  const [lawnHeight, setLawnHeight] = useState([]);

  // lawnmower 1 & 2 coordinates
  const [mowerOneX, setMowerOneX] = useState(0);
  const [mowerOneY, setMowerOneY] = useState(0);
  const [mowerTwoX, setMowerTwoX] = useState(0);
  const [mowerTwoY, setMowerTwoY] = useState(0);

  // lawnmower 1 & 2 directions
  const [mowerOneDirection, setMowerOneDirection] = useState(0);
  const [mowerTwoDirection, setMowerTwoDirection] = useState(0);

  // used to refresh the page if the lawn's settings are changed
  const [updateLawn, setUpdateLawn] = useState(false);

  const [start, setStart] = useState(false);

  // create 2 arrays to generate the lawn with .map() later
  const lawn = (w, h) => {
    let array = [];
    let arr = [];
    for (let i = 0; i <= w; i++) {
      array.push(i);
    }
    for (let j = 0; j <= h; j++) {
      arr.push(j);
    }
    setLawnHeight(arr);
    setLawnWidth(array);
  };

  useEffect(() => {
    lawn(width, height);
  }, [updateLawn]);

  // functions used to check mowers 1 & 2 positions
  const mowerOne = (x, y) => {
    if (mowerOneX === `${x}` && mowerOneY === `${y}`) {
      return true;
    }
    return false;
  };
  const mowerTwo = (x, y) => {
    if (mowerTwoX === `${x}` && mowerTwoY === `${y}`) {
      return true;
    }
    return false;
  };

  const mowersSamePosition = (x, y) => {
    if (mowerOneX === mowerTwoX && mowerOneY === mowerTwoY) {
      if (mowerTwoX === `${x}` && mowerTwoY === `${y}`) {
        return true;
      }
    }
    return false;
  };

  const lawnSize = { x: 90 / (width + 1), y: 30 / (height + 1) };

  return (
    <main className="container">
      <Lawn
        setUpdateLawn={setUpdateLawn}
        updateLawn={updateLawn}
        setWidth={setWidth}
        width={width}
        setHeight={setHeight}
        height={height}
        setStart={setStart}
      />
      <section className="ctn-lawn">
        {start &&
          lawnHeight.map((h) => {
            return (
              <div key={h} className="y-axis">
                {lawnWidth.map((w) => {
                  if (mowerOneX === w) {
                  }
                  let a = lawnHeight.length - h - 1;
                  return mowersSamePosition(w, a) ? (
                    <span key={w * (h + 1)} className="mower">
                      <MowerDisplay direction={mowerOneDirection} mower={1} />
                      <MowerDisplay direction={mowerTwoDirection} mower={2} />
                    </span>
                  ) : mowerOne(w, a) ? (
                    <span key={w * (h + 1)} className="mower">
                      <MowerDisplay direction={mowerOneDirection} mower={1} />
                    </span>
                  ) : mowerTwo(w, a) ? (
                    <span key={w * (h + 1)} className="mower">
                      <MowerDisplay direction={mowerTwoDirection} mower={2} />
                    </span>
                  ) : (
                    <span
                      key={w * (h + 1)}
                      className="lawn"
                      style={{ width: lawnSize.x, height: lawnSize.y }}
                    ></span>
                  );
                })}
              </div>
            );
          })}
      </section>
      <Mower
        width={width}
        height={height}
        setMowerOneDirection={setMowerOneDirection}
        setMowerTwoDirection={setMowerTwoDirection}
        mowerOneDirection={mowerOneDirection}
        mowerTwoDirection={mowerTwoDirection}
        setMowerOneX={setMowerOneX}
        setMowerTwoX={setMowerTwoX}
        setMowerOneY={setMowerOneY}
        setMowerTwoY={setMowerTwoY}
        setUpdateLawn={setUpdateLawn}
        updateLawn={updateLawn}
        mowerOneY={mowerOneY}
        mowerOneX={mowerOneX}
        mowerTwoX={mowerTwoX}
        mowerTwoY={mowerTwoY}
      />
    </main>
  );
}

export default App;
