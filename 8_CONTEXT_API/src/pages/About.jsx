import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
    const { counter } = useCounterContext();
    return (
        <div>
            <h1>About</h1>
            <p>Quantidade do contador: {counter}</p>
        </div>
    );
};

export default About;
