import { useRef, useState, useEffect } from "react";

const Dropdown = ({ onChange, option }) => {
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

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <div ref={ref}>orientation</div>
      </div>
      <div
        // temporarely using style prop instead of classname, will change once implementing CSS
        style={{ display: open ? "inherit" : "none" }}
      >
        {option?.map((elem, i) => {
          return (
            <div
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
