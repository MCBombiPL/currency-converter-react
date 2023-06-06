import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Header from "./Header";
import Result from "./Result";
import Fieldset from "./Fieldset";
import FormContainer from "./FormContainer";
import { useState } from "react";

function App() {
  const [selectedCurrency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const currencyChange = ({ target }) => {
    setCurrency(target.value);
  };

  const onInputChange = ({ target }) => {
    setAmount(target.value);
  };

  const calculateResult = (amount, selectedCurrency) => {
    if (!amount) {
      return null;
    }

    switch (selectedCurrency) {
      case "EUR":
        return amount / 4.79;

      case "USD":
        return amount / 4.45;

      case "GBP":
        return amount / 5.36;

      case "CZK":
        return amount / 0.2;

      case "SEK":
        return amount / 0.43;

      default:
        return null;
    }
  };

  const handleConversion = (event) => {
    event.preventDefault();
    const convertedResult = calculateResult(parseFloat(amount), selectedCurrency);
    setResult(convertedResult !== "" ? convertedResult : 0);
  };

  return (
    <FormContainer onSubmit={handleConversion}>
      <Header title="Kalkulator walut" />
      <Fieldset>
        <Select
          selectText="Wybierz walutę: "
          value={selectedCurrency}
          onChange={currencyChange}
        />
        <Input
          inputText="Wpisz ilość PLN: "
          amount={amount}
          onInputChange={onInputChange}
        />
        <Button text="Przelicz!" type="submit" onClick={handleConversion} />
        {result !== 0 && (
        <Result
        result={result}
        amount={amount}
        selectedCurrency={selectedCurrency}
        />
        )}
      </Fieldset>
    </FormContainer>
  );
}

export default App;
