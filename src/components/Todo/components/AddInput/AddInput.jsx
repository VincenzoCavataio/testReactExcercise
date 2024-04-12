import { useState } from "react";

export const AddInput = ({ setElements, elements }) => {
  const [currentElement, setCurrentElement] = useState();

  const onClick = (event) => {
    event.preventDefault();
    if (currentElement.trim() !== "") {
      setElements([...elements, currentElement]);
      setCurrentElement("");
    }
  };

  return (
    <form onSubmit={onClick}>
      <input
        type="text"
        placeholder="add element"
        onChange={(event) => setCurrentElement(event.target.value)}
        value={currentElement}
      />
      <input type="submit" value="+" />
    </form>
  );
};
