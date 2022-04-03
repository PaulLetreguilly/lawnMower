import "./App.css";
import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Gamepad from "./components/Gamepad";

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

  // used to hide some component after using them
  const [hide, setHide] = useState(false);

  // array used with a dropdown to get lawnmowers directions
  const direction = [
    { name: "N" },
    { name: "E" },
    { name: "S" },
    { name: "W" },
  ];

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

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // lawnMower(width, height);
          setUpdateLawn(!updateLawn);
        }}
      >
        <input
          type="number"
          min="0"
          step="1"
          // placeholder="lawn width / x"
          value={width}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
        <input
          type="number"
          min="0"
          step="1"
          // placeholder="lawn heigth / y"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <input type="submit" value="start" />
      </form>
      <section>
        {lawnHeight.map((h) => {
          return (
            <div key={h}>
              {lawnWidth.map((w) => {
                if (mowerOneX === w) {
                  // console.log(w);
                }
                // if (mowerOneX === w && mowerOneY === a) {
                //   console.log("true");
                // }
                // test(w);
                let a = lawnHeight.length - h - 1;
                return mowerOne(w, a) ? (
                  <span key={w * (h + 1)}>
                    {mowerOneDirection === 0 ? (
                      <span>a</span>
                    ) : mowerOneDirection === 1 ? (
                      <span>b</span>
                    ) : mowerOneDirection === 2 ? (
                      <span>c</span>
                    ) : mowerOneDirection === 3 ? (
                      <span>d</span>
                    ) : (
                      "1"
                    )}
                  </span>
                ) : mowerTwo(w, a) ? (
                  <span key={w * (h + 1)}>
                    {mowerTwoDirection === 0 ? (
                      <span>A</span>
                    ) : mowerTwoDirection === 1 ? (
                      <span>B</span>
                    ) : mowerTwoDirection === 2 ? (
                      <span>C</span>
                    ) : mowerTwoDirection === 3 ? (
                      <span>D</span>
                    ) : (
                      "1"
                    )}
                  </span>
                ) : (
                  <span key={w * (h + 1)}>{/* coord : {w}-{a}/ */}0</span>
                );
              })}
            </div>
          );
        })}
      </section>
      <form
        style={{ display: hide ? "none" : "inherit" }}
        onSubmit={(e) => {
          e.preventDefault();
          setHide(true);
          setUpdateLawn(!updateLawn);
        }}
      >
        <h3>lawnmower 1</h3>
        <input
          type="number"
          min="0"
          step="1"
          onChange={(e) => setMowerOneX(e.target.value)}
          value={mowerOneX}
        />
        <input
          type="number"
          min="0"
          step="1"
          onChange={(e) => setMowerOneY(e.target.value)}
          value={mowerOneY}
        />
        <Dropdown
          option={direction}
          onChange={(value) => {
            if (value === "N") {
              setMowerOneDirection(0);
            } else if (value === "E") {
              setMowerOneDirection(1);
            } else if (value === "S") {
              setMowerOneDirection(2);
            } else if (value === "W") {
              setMowerOneDirection(3);
            }
          }}
        />
        <h3>lawnmower 2</h3>
        <input
          type="number"
          min="0"
          step="1"
          onChange={(e) => setMowerTwoX(e.target.value)}
          value={mowerTwoX}
        />
        <input
          type="number"
          min="0"
          step="1"
          onChange={(e) => setMowerTwoY(e.target.value)}
          value={mowerTwoY}
        />
        <Dropdown
          option={direction}
          onChange={(value) => {
            if (value === "N") {
              setMowerTwoDirection(0);
            } else if (value === "E") {
              setMowerTwoDirection(1);
            } else if (value === "S") {
              setMowerTwoDirection(2);
            } else if (value === "W") {
              setMowerTwoDirection(3);
            }
          }}
        />
        <input type="submit" />
      </form>
      <section>
        <h3>lawnmower 1 gamepad</h3>
        <Gamepad
          direction={mowerOneDirection}
          setDirection={setMowerOneDirection}
          setX={setMowerOneX}
          setY={setMowerOneY}
          x={mowerOneX}
          y={mowerOneY}
          maximumX={width}
          maximumY={height}
        />
        <h3>lawnmower 2 gamepad</h3>
        <Gamepad
          direction={mowerTwoDirection}
          setDirection={setMowerTwoDirection}
          setX={setMowerTwoX}
          setY={setMowerTwoY}
          x={mowerTwoX}
          y={mowerTwoY}
        />
      </section>
    </main>
  );
}

export default App;
