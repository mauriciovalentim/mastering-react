// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    const { color, dispatch } = useTitleColorContext();
    console.log(color);

    const setTitleColor = (color) => {
        dispatch({ type: color });
    };
    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Quantidade do contador: {counter}</p>
            <ChangeCounter></ChangeCounter>
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    );
};

export default Home;
