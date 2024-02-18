import share from './img/share.png'
import rank from './img/rank.png'
import { Link } from 'react-router-dom';

const Sharerank = () => {

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("http://ziguquiz.site");
            alert("URL copied to clipboard");
        } catch (e) {
            alert("failed to copy");
        }
    }


    return(
        <>
            <div className='share' onClick={copyToClipboard}>
                <img src={share}/>
            </div>
            <Link to="/rankpage">
            <div className='rank'><img src={rank}/></div>
            </Link>
        </>
    )
};

export default Sharerank;