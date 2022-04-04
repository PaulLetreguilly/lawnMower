import Dropdown from "./Dropdown";
import Gamepad from "./Gamepad";
import { useState } from "react";

const Mower = ({
  width,
  height,
  setMowerOneDirection,
  setMowerTwoDirection,
  mowerOneDirection,
  mowerTwoDirection,
  setMowerOneX,
  setMowerTwoX,
  setMowerOneY,
  setMowerTwoY,
  setUpdateLawn,
  updateLawn,
  mowerOneY,
  mowerOneX,
  mowerTwoX,
  mowerTwoY,
}) => {
  const [hide, setHide] = useState(false);

  return (
    <div>
      <form
        style={{ display: hide ? "none" : "inherit" }}
        onSubmit={(e) => {
          e.preventDefault();
          setHide(true);
          setUpdateLawn(!updateLawn);
        }}
      >
        <h3 className="red">lawnmower 1</h3>
        <div className="ctn-form">
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
        </div>
        <h3 className="blue">lawnmower 2</h3>
        <div className="ctn-form">
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
        </div>
        <input type="submit" value="start" className="btn" />
      </form>
      <section style={{ display: !hide ? "none" : "inherit" }}>
        <h3 className="red">lawnmower 1 gamepad</h3>
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
        <h3 className="blue">lawnmower 2 gamepad</h3>
        <Gamepad
          direction={mowerTwoDirection}
          setDirection={setMowerTwoDirection}
          setX={setMowerTwoX}
          setY={setMowerTwoY}
          x={mowerTwoX}
          y={mowerTwoY}
          maximumX={width}
          maximumY={height}
        />
      </section>
    </div>
  );
};

export default Mower;
