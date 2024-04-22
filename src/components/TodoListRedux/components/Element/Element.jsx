import { useDispatch } from "react-redux";
import { removeValueById } from "../../../../redux/todoSlice";

export const Element = ({ value, id }) => {
  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(removeValueById(id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: 100,
        marginBottom: 10,
      }}
    >
      <div>{value}</div>
      <button style={{ marginLeft: 10 }} onClick={() => onClick(id)}>
        -
      </button>
    </div>
  );
};
