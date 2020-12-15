import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="title">Cake Redux using Hooks</h1>
      <div className="devider" />
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
