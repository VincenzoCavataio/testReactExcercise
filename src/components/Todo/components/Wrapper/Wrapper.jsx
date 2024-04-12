import { useState } from "react";
import { AddInput } from "../AddInput";
import { BodyMain } from "../BodyMain";

export const Wrapper = () => {
  const [elements, setElements] = useState([]);

  return (
    <div style={{ border: "solid 1px gray", padding: 20 }}>
      <AddInput setElements={setElements} elements={elements} />
      <BodyMain elements={elements} setElements={setElements} />
    </div>
  );
};
