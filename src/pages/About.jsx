import { useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import DisplayCount from "../components/displayCount/DisplayCount";
import Layout from "../components/layout/Layout";
import UpdateIncrementDecrement from "../components/updateInputValue/UpdateIncrementDecrement";

const About = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);


  function increment() {
    setCount(count + incrementValue);
  }
  function decrement() {
    setCount(count - decrementValue);
  }

  function handleIncrementChange(e) {
    setIncrementValue(parseInt(e.target.value));
  }
  function handleDecrementChange(e) {
    setDecrementValue(parseInt(e.target.value));
  }

  return (
    <Layout>
      <h1>About Page</h1>
      <DisplayCount count={count} />
      <UpdateIncrementDecrement
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      />
      <Buttons increment={increment} decrement={decrement} />
    </Layout>
  );
};

export default About;
