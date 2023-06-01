const Select = (props) => (
  <p>
    <label>
      Wybierz walutę:{" "}
      <select required className="form__select">
        <option name="currency" value="EUR">
          Euro
        </option>
        <option name="currency" value="USD">
          Dolar amerykański
        </option>
        <option name="currency" value="GBP">
          Funt brytyjski
        </option>
        <option name="currency" value="CZK">
          Korona czeska
        </option>
        <option name="currency" value="SEK">
          Korona szwedzka
        </option>
      </select>
    </label>
  </p>
);

export default Select;