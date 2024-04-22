import { AddElement } from "../AddElement";
import { Main } from "../Main";

export const Wrapper = () => {
  return (
    <div style={{ padding: 20, border: "solid 1px gray", marginTop: 10 }}>
      <AddElement />
      <Main />
    </div>
  );
};
