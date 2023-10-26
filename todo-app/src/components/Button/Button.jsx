const Button = ({ clickHandler, isDisable , btnText }) => {
  return (
    <button onClick={clickHandler} disabled={isDisable}>
      {btnText}
    </button>
  );
};

export default Button;
