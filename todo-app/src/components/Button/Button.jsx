const Button = ({ clickHandler, isDisable, btnText, btnClass }) => {
  return (
    <button onClick={clickHandler} disabled={isDisable} className={btnClass}>
      {btnText}
    </button>
  );
};

export default Button;
