import share from './img/share.png'
import rank from './img/rank.png'
import { Link } from 'react-router-dom';

const Sharerank = () => {
    return(
        <>
            <div className='share'>
                <img src={share}/>
            </div>
            <Link to="/rankpage">
            <div className='rank'><img src={rank}/></div>
            </Link>
        </>
    )
};

export default Sharerank;