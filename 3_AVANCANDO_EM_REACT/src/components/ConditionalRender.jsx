import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Jão");
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Se x for false é falso</p>}
            {name === "João" ? <p>É Jão</p> : <p>Não é Jão</p>}
            <button
                onClick={() => {
                    name === "João" ? setName("Pedro") : setName("João");
                }}
            >
                Mudar nome
            </button>
        </div>
    );
};

export default ConditionalRender;
