import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

export const Remove = ({ children, rmFunction }) => {
    return <li className='rm-Item' ><span>{children}</span>
        <button onClick={rmFunction}> <FontAwesomeIcon className='icon2' icon={faWindowClose} size='lg' /></button>
    </li>;

};
