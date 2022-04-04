import { useRef, useState, useEffect } from "react";

const Dropdown = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  const close = (e) => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(e.target)) {
      setOpen(false);
    }
  };

  const option = [{ name: "N" }, { name: "E" }, { name: "S" }, { name: "W" }];

  return (
    <div style={{ position: "relative" }}>
      <div onClick={() => setOpen(!open)} className="drop">
        <div ref={ref}>orientation</div>
      </div>
      <div
        // temporarely using style prop instead of classname, will change once implementing CSS
        style={{ display: open ? "inherit" : "none" }}
        className="down"
      >
        {option?.map((elem, i) => {
          return (
            <div
              className="drop-elem"
              key={i}
              onClick={() => {
                onChange(elem.name);
                setOpen(!open);
              }}
            >
              {elem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
