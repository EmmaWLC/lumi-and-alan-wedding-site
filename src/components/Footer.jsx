import { getAssetPath } from '../utils/assets';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-monogram">
                    <img src={getAssetPath('assets/logo.png')} alt="A&L Monogram" />
                </div>
                <p className="footer-day">SATURDAY,</p>
                <p className="footer-date">JUNE 27, 2026</p>
            </div>
        </footer>
    );
}

export default Footer;
