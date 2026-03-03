import { Link, useLocation } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import '../styles/Header.css';

function Header({ currentPage }) {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navItems = [
        { path: '/main', label: 'HOME' },
        { path: '/our-story', label: 'OUR STORY' },
        { path: '/details', label: 'DETAILS' },
        { path: '/rsvp', label: 'RSVP' },
    ];

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/main" className="header-logo">
                    <img src={getAssetPath('assets/white logo.png')} alt="A&L" className="logo-img logo-desktop" />
                    <img src={getAssetPath('assets/logo.png')} alt="A&L" className="logo-img logo-mobile" />
                    <span className="header-date">June 27th, 2026</span>
                </Link>

                <nav className="header-nav desktop-nav">
                    {navItems.map(item => (
                        isActive(item.path) ? (
                            <span key={item.path} className="nav-current">{item.label}</span>
                        ) : (
                            <Link key={item.path} to={item.path}>{item.label}</Link>
                        )
                    ))}
                </nav>

                <button className="mobile-menu-btn">
                    MENU
                </button>
            </div>
        </header>
    );
}

export default Header;
