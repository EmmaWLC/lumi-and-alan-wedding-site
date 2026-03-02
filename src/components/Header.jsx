import { Link, useLocation } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import '../styles/Header.css';

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/main" className="header-logo">
                    <img src={getAssetPath('assets/white logo.png')} alt="A&L" className="logo-img" />
                    <span className="header-date">june 27th, 2026</span>
                </Link>

                <nav className="header-nav desktop-nav">
                    <Link to="/main" className={isActive('/main')}>HOME</Link>
                    <Link to="/our-story" className={isActive('/our-story')}>OUR STORY</Link>
                    <Link to="/details" className={isActive('/details')}>DETAILS</Link>
                    <Link to="/rsvp" className={isActive('/rsvp')}>RSVP</Link>
                </nav>

                <button className="mobile-menu-btn">
                    MENU
                </button>
            </div>
        </header>
    );
}

export default Header;
