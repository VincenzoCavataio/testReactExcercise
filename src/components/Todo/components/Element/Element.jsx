import { ElementStyle } from "./style";

export const Element = ({ element, setElements, elements }) => {
  /** remove element */
  const onClick = () => {
    setElements(elements.filter((e) => e !== element));
  };
  return (
    <div style={ElementStyle.element}>
      <div style={ElementStyle.div}>{element}</div>
      <div style={ElementStyle.delete} onClick={onClick}>
        -
      </div>
    </div>
  );
};
