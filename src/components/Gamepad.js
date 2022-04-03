const Gamepad = ({
  direction,
  setDirection,
  x,
  y,
  setX,
  setY,
  maximumX,
  maximumY,
}) => {
  const leftDirection = () => {
    if (direction === 0) {
      const left = 3;
      setDirection(left);
    } else {
      const left = Number(direction) - 1;
      setDirection(left);
    }
  };

  const rightDirection = () => {
    if (direction === 3) {
      const right = 0;
      setDirection(right);
    } else {
      const right = Number(direction) + 1;
      setDirection(right);
    }
  };

  const forward = () => {
    if (direction === 0) {
      // if looking North
      if (maximumY !== y) {
        // adding condition if mower is not at the limit of the lawn
        const newY = Number(y) + 1;
        setY(`${newY}`);
      }
    } else if (direction === 1) {
      // if looking East
      if (maximumX !== x) {
        // adding condition if mower is not at the limit of the lawn
        const newX = Number(x) + 1;
        setX(`${newX}`);
      }
    } else if (direction === 2) {
      // if looking South
      if (Number(y) !== 0) {
        // adding condition if mower is not at the limit of the lawn
        const newY = Number(y) - 1;
        setY(`${newY}`);
      }
    } else if (direction === 3) {
      // if looking West
      if (Number(x) !== 0) {
        // adding condition if mower is not at the limit of the lawn
        const newX = Number(x) - 1;
        setX(`${newX}`);
      }
    }
  };

  return (
    <div>
      <button onClick={leftDirection}>G</button>
      <button onClick={forward}>A</button>
      <button onClick={rightDirection}>D</button>
    </div>
  );
};

export default Gamepad;
