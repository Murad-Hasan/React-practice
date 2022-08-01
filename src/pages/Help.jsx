import { useState } from "react";
import Layout from "../components/layout/Layout";
const Help = () => {
  // const [state, setState] = useState({});

  const [name, setName] = useState("Murad Hasan");

  // setTimeout(() => {
  //   setState({ name: "Murad" });
  // }, 10 * 500);

  return (
    <Layout>
      {/* {name && <h2>{name} Help Page</h2>}
      {!name && <h2>Hello Guest, Help Page</h2>} */}
      {name ? <h2>{name} Help Page</h2> : <h2>Hello Guest, Help Page</h2>}
    </Layout>
  );
};

export default Help;
