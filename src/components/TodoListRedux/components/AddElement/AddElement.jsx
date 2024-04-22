import { useState } from "react";
import { useDispatch } from "react-redux";
import { addValue, removeAllValues } from "../../../../redux/todoSlice";

export const AddElement = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onClick = (event) => {
    event.preventDefault();
    dispatch(addValue(value));
    setValue("");
  };

  const removeAll = (event) => {
    event.preventDefault();
    dispatch(removeAllValues());
  };

  return (
    <form>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button type="submit" onClick={onClick}>
        Add
      </button>
      <button type="submit" onClick={removeAll}>
        Remove all
      </button>
    </form>
  );
};
