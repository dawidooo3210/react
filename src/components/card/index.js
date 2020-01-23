import React, {useState} from "react";
import Img from "../img";
import P from "../p";
import Button from "../button";
// import './style.scss';

const Card = (props) => {
  const onChangeHandle = () => {
        console.log('test');
  };
  return (
    <div className="card">
      <Img/>
      <P text={props.text}/>
      <p> {props.price}</p>
      <Button className="button-shop" text="Dodaj do koszyka"  onChangeHandle={onChangeHandle} />
      <br/>
      <Button className="button-more" text="Dowiedz się więcej"/>
    </div>
  );
}
export default Card;