function Button(props) {
  return (
    <button className="btn" onClick={props.handleClick}>
      {props.btnText}
    </button>
  );
}

export default Button;
