import "./App.css";
import alagoas from "./assets/alagoas.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {
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
        </>
    );
}

export default App;
