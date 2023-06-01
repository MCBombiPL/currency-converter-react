const Input = ({inputText}) => (
  <p>
    <label>
      {inputText}
      <input
        className="form__input"
        required
        type="number"
        min="0"
        step="0.01"
      />
    </label>
  </p>
);

export default Input;