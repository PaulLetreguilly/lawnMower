import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MowerDisplay = ({ direction, mower }) => {
  return (
    <span style={{ color: `${mower === 1 ? "red" : "blue"}` }}>
      {direction === 0 ? (
        <span>
          <FontAwesomeIcon icon="fa-arrow-up" size={"2x"} />
        </span>
      ) : direction === 1 ? (
        <span>
          <FontAwesomeIcon icon="fa-arrow-right" size={"2x"} />
        </span>
      ) : direction === 2 ? (
        <span>
          <FontAwesomeIcon icon="fa-arrow-down" size={"2x"} />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon="fa-arrow-left" size={"2x"} />
        </span>
      )}
    </span>
  );
};

export default MowerDisplay;
