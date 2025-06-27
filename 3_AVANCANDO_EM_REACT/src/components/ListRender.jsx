import { useState } from "react";

const ListRender = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Matheus", age: 28 },
        { id: 2, name: "Pedro", age: 44 },
        { id: 3, name: "Maria", age: 21 },
        { id: 4, name: "Gustavo", age: 31 },
    ]);

    const deleteItem = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        setItems((prevUsers) => {
            return prevUsers.filter((item) => item.id !== randomNumber);
        });
    };
    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    Nome: {item.name} Idade: {item.age}
                </p>
            ))}
            <button onClick={deleteItem}>Apagar item</button>
        </div>
    );
};

export default ListRender;
