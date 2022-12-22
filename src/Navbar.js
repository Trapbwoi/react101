import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div>
              LOGO
            </div>
            <ul>
                <NavLink to="/profile"><li>Home</li></NavLink> 
                <NavLink to="/display"><li>My Blog</li></NavLink>
                <NavLink to="/about"><li>About Us</li></NavLink>
                <NavLink to="/contact"><li>Profile</li></NavLink>
            </ul>
        </div>
     );
}
 
export default Navbar;
<div className="navbar"></div>