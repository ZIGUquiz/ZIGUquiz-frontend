import logo from './img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <div className='logopic'>
                <Link to="/"><img src={logo}/></Link>
            </div>
        </div>
    )
};

export default Navbar;