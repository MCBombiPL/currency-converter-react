const Button = ({text, type}) => (
  <p>
    <button className="form__button" type={type}>{text}</button>
  </p>
);

export default Button;