import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchForm() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search?name_like=" + query);
        setQuery("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    value={query}
                />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    );
}

export default SearchForm;
