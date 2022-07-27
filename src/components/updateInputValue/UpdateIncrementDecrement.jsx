const UpdateIncrementDecrement = ({
  incrementValue,
  decrementValue,
  handleIncrementChange,
  handleDecrementChange,
}) => {
  return (
    <>
      <label>Update Increment</label>
      <input
        type="number"
        value={incrementValue}
        onChange={handleIncrementChange}
      />{" "}
      <br />
      <label>Update Decrement</label>
      <input
        type="number"
        value={decrementValue}
        onChange={handleDecrementChange}
      />
    </>
  );
};

export default UpdateIncrementDecrement;
