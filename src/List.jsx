import { Remove } from "./Remove";

export const List = ({ items, handleRemove }) => {
    return (
        <ul>
            {items.map((item, index) => {
                return <Remove key={index} rmFunction={() => handleRemove(index)}>{item}
                </Remove>;
            })}
        </ul>
    );
};


