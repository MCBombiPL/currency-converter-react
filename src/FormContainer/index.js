import "./style.css";

const FormContainer = ({children, onSubmit}) => (
<form className="form" onSubmit={onSubmit}>
    {children}
</form>
);

export default FormContainer;