const Section = ({ items , title }) => {
  const itemArray = items.map((item, index) => <li>{item}</li>);
  return (
    <>
      <section>
        <h3>{title}</h3>
        <ul>{itemArray}</ul>
      </section>
    </>
  );
};

export default Section;
