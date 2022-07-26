function InputGroup(props) {
    const { Text, type } = props;
    return (
    <div
        style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        }}
    >
        <label
        style={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#616161",
        marginTop: "10px",
        }}
        htmlFor="name"
    >
        {Text}
    </label>
    <input
        style={{
            border: "1px solid #ccc",
            outline: "none",
            padding: "5px",
            borderRadius: "5px",
            width: "100%",
            fontSize: "1rem",
        }}
        type={type}
        id={type}
        />
    </div>
    );
}

export default InputGroup;
