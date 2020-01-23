import React, {useState} from 'react';
import Card from '../card';

const products = [
  {  price: 125, text: "rurzowe japko" },
  {  price: 100, text: "rzułte japko"}
];

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    const newVal = event.target.value;
    setValue(newVal);
  };
  return (
    <>
          <input type="number" onChange={handleChange} value={value}/>
          {
            products
             .filter(el => el.text.includes(value) )
             .map((pro, key) =>(
                <Card key={key} price={pro.price} text={pro.text}/>
             ))
          }
   </>
  );
};

export default SearchBar;
