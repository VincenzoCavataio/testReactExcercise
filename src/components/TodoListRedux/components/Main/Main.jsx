import { useSelector } from "react-redux";
import { Element } from "../Element";

export const Main = () => {
  const values = useSelector((state) => state.todoList.value);
  console.log(values);
  return (
    <div>
      {values.map((e) => (
        <Element key={e.id} value={e.value} id={e.id} />
      ))}
    </div>
  );
};
