import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Header from "./Header";

function App() {
  return (
    <form className="form">
        <Header title="Kalkulator walut"/>
        <fieldset className="form__fieldset">
            <Select />
            <Input />
            <Button />
            <p></p>
        </fieldset>
    </form>
  );
}

export default App;
