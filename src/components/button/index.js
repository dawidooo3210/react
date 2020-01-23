import React from "react";
// import "./style.scss";

const Button = (props) => {
    return (
      <button className={props.ClassName} onClick={props.onChangeHandle}>{props.text}</button>
    );
}
export default Button;
