export const Remove = ({ children, rmFunction }) => {
    return <li className='rm-Item' ><span>{children}</span>
        <button onClick={rmFunction}> x </button>
    </li>;

};
