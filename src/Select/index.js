const Select = ({ selectText, selectedCurrency, onSelectChange }) => (
  <p>
    <label>
      {selectText}
      <select
        required
        className="form__select"
        value={selectedCurrency}
        onChange={onSelectChange}
      >
        <option>EUR</option>
        <option>USD</option>
        <option>GBP</option>
        <option>CZK</option>
        <option>SEK</option>
      </select>
    </label>
  </p>
);

export default Select;
