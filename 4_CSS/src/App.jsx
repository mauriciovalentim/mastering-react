import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
    const n = 5;
    const redTitle = false;
    return (
        <>
            <h1>React com CSS</h1>
            <MyComponent />
            <p>Este é o paragrafo do app.js</p>
            <p
                style={{
                    color: "blue",
                    padding: "25px",
                    borderTop: "2px solid red",
                }}
            >
                Este elemento foi estilizado de forma inline
            </p>
            <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
                CSS dinâmico
            </h2>
            <h2 className={redTitle ? "red-title" : "title"}>
                Este título vai ter classe dinâmica
            </h2>
            <Title />
        </>
    );
}

export default App;
