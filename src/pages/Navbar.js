import './Navbar.css';
import { Link, Outlet, useLocation} from "react-router-dom";
import logo from '../images/logo.png';
import { memo, useEffect, useRef, useState } from 'react';
function Navbar() {
    const location = useLocation()
    const loc = window.location.pathname + window.location.hash;
    const [active, setActive] = useState(0);
    useEffect(()=>{
        if (loc === "/Doctor_appointment/#/")
            setActive(1)
        else if (loc === "/Doctor_appointment/#/details")
            setActive(2)
        else if (loc === "/Doctor_appointment/#/appointment")
            setActive(3)
        else if (loc === "/Doctor_appointment/#/login")
            setActive(4)
        else 
            setActive(2)
    },[location]);
    return (<>
        <nav>
            <div className="nav-left">
                <img src={logo} className='logo' />
                <div>CS Hospital</div>
            </div>
            <div className="nav-right">
                <div className='back' id="menu" onClick={ShowHide}>
                <ul className='menubox' type='none'>
                    <Link to="/" onClick={ShowHide}><li onClick={ShowHide} className={active === 1 ? 'active' : ''} >Home<span></span></li></Link>
                    <Link to="/details" onClick={ShowHide}><li onClick={ShowHide} className={active === 2 ? 'active' : ''} >Details<span></span></li></Link>
                    <Link to="/appointment" onClick={ShowHide}><li onClick={ShowHide} className={active === 3 ? 'active' : ''} >Appoinments<span></span></li></Link>
                    <Link to="/login" onClick={ShowHide}><li onClick={ShowHide} className={active === 4 ? 'active' : ''} >Login<span></span></li></Link>
                </ul>
                </div>
            </div>
            <div className='menuicon'>
                <span onClick={ShowHide}><i className="fa-solid fa-bars"></i></span>
            </div>
        </nav>
        <div className='main-ctn'>
            <Outlet context={{setActive}}/>
        </div>
    </>);
    function ShowHide(){
        var menu = document.getElementById('menu');
        menu.classList.toggle('showm')
    }
}
export default (Navbar);
