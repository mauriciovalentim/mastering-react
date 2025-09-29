import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
    const { id } = useParams();
    const { document: post } = useFetchDocument("posts", id);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(", ");
            setTags(textTags);
        }
    }, [post]);
    const navigate = useNavigate();

    const { updateDocument, response } = useUpdateDocument("posts");
    const { user } = useAuthValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        if (!title.trim() || !image.trim() || !tags.trim() || !body.trim()) {
            setFormError("Por favor, preencha todos os campos!");
            return;
        }
        //VALIDATE IMAGE URL
        try {
            console.log("url");
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.");
            return;
        }

        const tagsArray = tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase());

        //CHECAR TODOS OS VALORES

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        };
        updateDocument(id, data);

        //redirect to home page
        navigate("/dashboard");
    };
    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>
                        Escreva sobre o que quiser e compartilhe o seu
                        conhecimento
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título</span>
                            <input
                                type="text"
                                name="title"
                                placeholder="Pense num bom título"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label>
                            <span>URL da imagem:</span>
                            <input
                                type="text"
                                name="image"
                                placeholder="Insira uma imagem que representa o seu post"
                                onChange={(e) => setImage(e.target.value)}
                                value={image}
                            />
                        </label>
                        <p className={styles.preview_title}>
                            Preview da imagem atual:
                        </p>
                        <img
                            className={styles.image_preview}
                            src={post.image}
                            alt={post.title}
                        />
                        <label>
                            <span>Conteúdo:</span>
                            <textarea
                                name="body"
                                placeholder="Insira o conteúdo do post"
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            ></textarea>
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input
                                type="text"
                                name="tags"
                                placeholder="insira as tags separadas por vírgula"
                                onChange={(e) => setTags(e.target.value)}
                                value={tags}
                            />
                        </label>
                        {!response.loading && (
                            <button className="btn">Cadastrar</button>
                        )}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde...
                            </button>
                        )}
                        {response.error && (
                            <p className="error">{response.error}</p>
                        )}
                        {formError && <p className="error">{formError}</p>}
                    </form>
                </>
            )}
        </div>
    );
};

export default EditPost;
