import { useState } from "react";

export const AddInput = ({ setElements, elements }) => {
  const [currentElement, setCurrentElement] = useState();

  const onClick = (event) => {
    event.preventDefault();
    setElements([...elements, currentElement]);
  };

  return (
    <form onSubmit={onClick}>
      <input
        type="text"
        placeholder="add element"
        onChange={(event) => setCurrentElement(event.target.value)}
      />
      <input type="submit" value="add" />
    </form>
  );
};
