function Input(props) {
  const handleChange = (e) => {
      props.handleChange(props.col,e.target.value);
  };
  return (
    <div>
      <input
        className="num"
        type="number"
        onChange={handleChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
