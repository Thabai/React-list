import { useState } from "react";

export const Form = ({ handleItem }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleItem(input);
        setInput("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit'> + </button>
        </form>
    );
};
