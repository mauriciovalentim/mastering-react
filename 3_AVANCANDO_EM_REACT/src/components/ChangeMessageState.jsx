const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["Oi", "Olá", "Koe", "Salve"];
    return (
        <div>
            {messages.map((message, index) => (
                <button onClick={() => handleMessage(message)} key={index}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default ChangeMessageState;
