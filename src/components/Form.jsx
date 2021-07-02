import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Form = ({ handleItem }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        if (input.length > 1) {
        event.preventDefault();
        handleItem(input);
        setInput("");
        } else {
            event.preventDefault();
            setInput("");
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <button type='submit'> <FontAwesomeIcon className='icon' icon={faStar} size='lg' /></button>
        </form>
    );
};
