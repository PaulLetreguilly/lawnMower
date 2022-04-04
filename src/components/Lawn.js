const Lawn = ({
  setUpdateLawn,
  updateLawn,
  setWidth,
  width,
  setHeight,
  height,
  setStart,
}) => {
  return (
    <div>
      <h3>Lawn size</h3>
      <form
        className="lawn-form"
        onSubmit={(e) => {
          e.preventDefault();
          setStart(true);
          setUpdateLawn(!updateLawn);
        }}
      >
        <input
          type="number"
          min="0"
          step="1"
          value={width}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
        <input
          type="number"
          min="0"
          step="1"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <input type="submit" value="start" className="btn" />
      </form>
    </div>
  );
};

export default Lawn;
