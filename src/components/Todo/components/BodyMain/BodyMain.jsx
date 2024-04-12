import { Element } from "../Element";

export const BodyMain = ({ elements, setElements }) => {
  return (
    <div>
      {elements?.map((element) => (
        <Element
          element={element}
          setElements={setElements}
          elements={elements}
        />
      ))}
    </div>
  );
};
