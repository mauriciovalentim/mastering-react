import "./App.css";

const url = "http://localhost:3000/products";
import { useState, useEffect } from "react";
function App() {
    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [watch, setWatch] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            setProducts(data);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setName("");
        setPrice("");

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, price: price }),
        });
        const addedProduct = await res.json();
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
    };

    return (
        <>
            <div className="add-product">
                <form>
                    <label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Digite o nome do produto"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            value={price}
                            placeholder="Digite o preço do produto"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Enviar"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>{product.name}</p>{" "}
                        <span>
                            R$
                            {Number(product.price).toFixed(2).replace(".", ",")}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
