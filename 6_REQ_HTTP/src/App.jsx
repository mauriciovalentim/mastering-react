import "./App.css";

const url = "http://localhost:3000/products";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
function App() {
    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const { data: items, httpConfig, loading, error } = useFetch(url);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
        };

        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ name: name, price: price }),
        // });
        // const addedProduct = await res.json();
        // setProducts((prevProducts) => [...prevProducts, addedProduct]);
        httpConfig(product, "POST");

        setName("");
        setPrice("");
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
                    {!loading && (
                        <input
                            type="submit"
                            value="Enviar"
                            onClick={handleSubmit}
                        />
                    )}
                    {loading && (
                        <input type="submit" value="Aguarde" disabled />
                    )}
                </form>
            </div>

            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            {!error && (
                <ul>
                    {items &&
                        items.map((product) => (
                            <li key={product.id}>
                                <p>{product.name}</p>{" "}
                                <span>
                                    R$
                                    {Number(product.price)
                                        .toFixed(2)
                                        .replace(".", ",")}
                                </span>
                                <button
                                    onClick={() => {
                                        httpConfig(product.id, "DELETE");
                                    }}
                                >
                                    Deletar
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </>
    );
}

export default App;
