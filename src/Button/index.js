const Button = ({text, type, onClick}) => (
  <p>
    <button className="form__button" type={type} onClick={onClick}>
      {text}
      </button>
  </p>
);

export default Button;