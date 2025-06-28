import { useState } from "react";
import "./MyForm.css";
const MyForm = ({ user }) => {
    const [username, setUsername] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleChange = (e) => {
        setUsername(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(username, email);
        console.log(bio);
        console.log(role);

        setUsername("");
        setEmail("");
        setBio("");
        setRole("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={handleChange}
                        value={username}
                    />
                </div>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea
                        onChange={(e) => setBio(e.target.value)}
                        name="bio"
                        placeholder="Digite sua bio"
                        value={bio}
                    ></textarea>
                </label>
                <label>
                    <select
                        name="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="admin">Administrador</option>
                        <option value="user">Usuário</option>
                        <option value="guest">Convidado</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;
