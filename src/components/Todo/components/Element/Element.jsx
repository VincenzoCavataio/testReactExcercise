import { ElementStyle } from "./style";

export const Element = ({ element, setElements, elements }) => {
  const onClick = () => {
    setElements(elements.filter((e, i) => i !== element.id));
  };
  return (
    <div style={ElementStyle.element} key={element.id}>
      <div style={ElementStyle.div}>{element.value}</div>
      <div style={ElementStyle.delete} onClick={onClick}>
        -
      </div>
    </div>
  );
};
