import "./style.css";

const FormContainer = ({ children, onFormSubmit }) => (
  <form className="form" onSubmit={onFormSubmit}>
    {children}
  </form>
);

export default FormContainer;
