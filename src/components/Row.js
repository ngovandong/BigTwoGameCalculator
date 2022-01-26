import Input from "./Input";

function Row(props) {
  const handleChange = (col, value) => {
    props.handleChange(props.index - 1, col, value);
  };
  return (
    <tr>
      <td>{props.index}</td>
      {props.row.map((ele, i) => (
        <td className="no-padding" key={i}>
          <Input value={ele} col={i} handleChange={handleChange} />
        </td>
      ))}
    </tr>
  );
}

export default Row;
