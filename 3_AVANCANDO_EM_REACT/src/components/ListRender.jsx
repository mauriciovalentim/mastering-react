import { useState } from "react";

const ListRender = () => {
    const [items] = useState(["Matheus", "Pedro", "Maria", "Gustavo"]);
    return (
        <div>
            {items.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    );
};

export default ListRender;
