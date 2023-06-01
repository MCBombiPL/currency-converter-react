import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Header from "./Header";
import Result from "./Result";
import Fieldset from "./Fieldset";
import FormContainer from "./FormContainer";

function App() {
  return (
    <FormContainer>
      <Header title="Kalkulator walut" />
      <Fieldset>
        <Select selectText="Wybierz walutę: " />
        <Input inputText="Wpisz ilość PLN: " />
        <Button text="Przelicz!" />
        <Result />
      </Fieldset>
    </FormContainer>
  );
}

export default App;
