import Button from "./components/button/Button";
import InputGroup from "./components/input-group/InputGroup";

function App() {
  return (
    <div
      style={{
        width: "50%",
        margin: "5rem auto",
        padding: "10px",
        backgroundColor: "#f4f4f4",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px #ccc",
      }}
    >
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h3>Sign up</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat
          delectus non enim dignissimos consequatur!
        </p>
      </div>
      <form action="">
        <InputGroup Text="What is Your Name?" type="name" />
        <InputGroup Text="What is your email?" type="email" />
        <InputGroup Text="What is your password?" type="password" />
        <div>
          <Button Text="Submit" type="submit" variant="primary" size="small"/>
          <Button Text="Reset" type="reset" variant="error" size="medium"/>
          <Button Text="Info" type="button" variant="info" size='large'/>
          <Button Text="Warning" type="button" variant="warning" />
        </div>
      </form>
    </div>
  );
}

export default App;
