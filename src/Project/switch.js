import "./index.css";

const SwitchList = (props) => {
  const { element, makestatus, active } = props;
  const { type, id } = element;
  return (
    <button
      className={`buttoncategory ${active === id && "highlightbutton"}`}
      onClick={() => makestatus(id)}
    >
      {type}
    </button>
  );
};

export default SwitchList;
