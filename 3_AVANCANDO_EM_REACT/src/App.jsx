import "./App.css";
import { useState } from "react";
import alagoas from "./assets/alagoas.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
    const users = [
        { name: "Mauricio", age: "25" },
        { name: "Eduarda", age: 28 },
        { name: "Denisson", age: 33 },
    ];
    const showMessage = () => {
        console.log("Salve salve família");
    };

    const [message, setMessage] = useState("");
    const handleMessage = (newMessage) => {
        setMessage(newMessage);
    };
    return (
        <>
            <h1>AVANÇANDO EM REACT</h1>
            <div>
                <img src="./recife.jpg" alt="Recife antigo" />
            </div>
            <div>
                <img src={alagoas} alt="Praia em alagoas" />
            </div>
            <ManageData />
            <ListRender />
            <ConditionalRender />
            {users.map((user, index) => (
                <ShowUserName key={index} name={user.name} age={user.age} />
            ))}
            <Fragments />
            <Container>
                <p>E esse é o conteúdo do container</p>
                <p>E esse é outro conteúdo do container</p>
            </Container>
            <ExecuteFunction myFunction={showMessage} />
            <Message message={message} />
            <ChangeMessageState handleMessage={handleMessage} />
        </>
    );
}

export default App;
