import { useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import DisplayCount from "../components/displayCount/DisplayCount";
import Layout from "../components/layout/Layout";

const About = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <Layout>
      <h1>About Page</h1>
      <DisplayCount count={count} />
      <Buttons increment={increment} decrement={decrement} />
    </Layout>
  );
};

export default About;
