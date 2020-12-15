import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux";

const NewCakeContainer = () => {
  const [number, setNumber] = useState(1);
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="title">Cake with count Redux using Hooks</h1>
      <div className="devider" />
      <h2>Number of cakes - {numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
};

export default NewCakeContainer;
