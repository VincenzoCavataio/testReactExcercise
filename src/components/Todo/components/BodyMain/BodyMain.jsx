import { Element } from "../Element";

export const BodyMain = ({ elements, setElements }) => {
  const noElements = elements.length === 0;

  if (noElements) {
    return <div>No elements found</div>;
  }

  return elements.map((element, index) => (
    <Element
      /* mettere index come key non è ottimale */
      key={index}
      element={{ value: element, id: index }}
      setElements={setElements}
      elements={elements}
    />
  ));
};
