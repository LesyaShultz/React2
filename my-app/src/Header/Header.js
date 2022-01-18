import './Header.css';
import text from '../datatext/text.json'
import logo from '../img/logo.png';

function Header (){
    return(
        <div className="Header-app">
            <div className="Nav">
                <img src={logo} alt="logo"  />
                <ul>
                {text.map(item=>
                    <li>
                     <a href={item.href}>{item.title}</a>
                    </li>
                )}
                </ul>

            </div>
        </div>
    )
    }
    
    export default Header;