import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';
//import ISBAlogo from '../../public/images/ISBA-logo.png'


function Navbar() {
    const [click, setClick] = useState(false);
    const  [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        
                        <img src='images/ISBA-logo.png' alt='ISBA-logo' className='isba-logo'/>
                        <div className='ISBA-logo-text'>
                            ISBA
                        </div>
                        
                    </Link>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/AboutISBA" className='nav-links' onClick={closeMobileMenu} >
                                About ISBA
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Resources" className='nav-links' onClick={closeMobileMenu} >
                                Resources
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                                Meet the Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='https://beinvolved.indiana.edu/organization/isbaatiu' className='nav-links-mobile' onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">
                                Sign Up
                            </Link>
                        </li>
                        
                    </ul>
                    <div className='sign-up-button'>
                        {button && <Button buttonStyle='btn--outline' >Sign Up</Button>}
                    </div>
                    
                </div>    
            </nav> 
        </>
    )
}

export default Navbar