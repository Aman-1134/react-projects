import image from './logo.png';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul>
                <li id="logo"><img src={image} height={30} width={100} alt="logo-infotech"/></li>
                <li id="active"><a href="#"><b>Home</b></a></li>
                <li id="active"><a href="#"><b>About</b></a></li>
                <li id="active"><a href="#"><b>Services<FaAngleDown  color='cornflowerblue'/></b></a></li>
                <li id="active"><a href="#"><b>Blogs</b></a></li>
                <li id="active"><a href="#"><b>Contact</b></a></li>
                <a href="#"><button id="login-button"><b>Login</b></button></a> 
            </ul>
            
        </nav>
     );
}
 
export default Navbar;