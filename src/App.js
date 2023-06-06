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
  const [result, setResult] = useState(null);

  const onSelectChange = ({ target }) => {
    setCurrency(target.value);
  };

  const onInputChange = ({ target }) => {
    setAmount(target.value);
  };

  const calculateResult = (amount, selectedCurrency) => {
    const conversionRates = {
      EUR: 4.79,
      USD: 4.45,
      GBP: 5.36,
      CZK: 0.2,
      SEK: 0.43,
    };

    if (!amount || !conversionRates[selectedCurrency]) {
      return 0;
    }

    return amount / conversionRates[selectedCurrency];
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const convertedResult = calculateResult(amount, selectedCurrency);
    setResult({
      finalResult: convertedResult,
      moneyAmount: amount,
      currency: selectedCurrency,
    });
  };

  return (
    <FormContainer onFormSubmit={onFormSubmit}>
      <Header title="Kalkulator walut" />
      <Fieldset>
        <Select
          selectText="Wybierz walutę: "
          selectedCurrency={selectedCurrency}
          onSelectChange={onSelectChange}
        />
        <Input
          inputText="Wpisz ilość PLN: "
          amount={amount}
          onInputChange={onInputChange}
        />
        <Button text="Przelicz!" type="submit" onClick={onFormSubmit} />
        {result && (
          <Result
            result={result.finalResult}
            amount={result.moneyAmount}
            selectedCurrency={result.currency}
          />
        )}
      </Fieldset>
    </FormContainer>
  );
}

export default App;
