const Input = ({inputText, amount, onInputChange}) => (
  <p>
    <label>
      {inputText}
      <input
        className="form__input"
        required
        type="number"
        min="0"
        step="0.01"
        value={amount}
        onChange={onInputChange}
      />
    </label>
  </p>
);

export default Input;