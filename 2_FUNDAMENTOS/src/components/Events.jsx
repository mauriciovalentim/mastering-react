const Events = () => {
    const handleClick = (e) => {
        console.log(e);
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando algo condicionalmente</h1>;
        } else {
            return <h1>Renderizando algo diferente</h1>;
        }
    }

    return (
        <div>
            <h2>Eventos</h2>
            <button onClick={handleClick}>Clique em mim</button>
            <button onClick={() => console.log("Clicou!")}>Clique em mim também</button>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;
