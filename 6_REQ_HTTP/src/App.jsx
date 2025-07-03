import "./App.css";

const url = "http://localhost:3000/products";
import { useState, useEffect } from "react";
function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map(({ id, name, price }) => (
                    <li key={id}>
                        {name} - {price}
                    </li>
                ))}
            </ul>
            
        </>
    );
}

export default App;
