import "./App.css";
import MyForm from "./components/MyForm";

function App() {
    return (
        <>
            <h2>Forms</h2>
            <MyForm
                user={{
                    name: "mauricio",
                    email: "mauriciovalentim@gmail.com",
                    bio: "Meu nome é Mauricio Valentim",
                    role: "guest",
                }}
            />
        </>
    );
}

export default App;
