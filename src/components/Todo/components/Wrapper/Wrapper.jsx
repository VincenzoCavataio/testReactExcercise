import { useState } from "react";
import { AddInput } from "../AddInput";
import { BodyMain } from "../BodyMain";

export const Wrapper = () => {
  const [elements, setElements] = useState([]);

  return (
    <>
      <AddInput setElements={setElements} elements={elements} />
      <BodyMain elements={elements} setElements={setElements} />
    </>
  );
};
