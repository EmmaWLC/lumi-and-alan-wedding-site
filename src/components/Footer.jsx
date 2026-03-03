import { getAssetPath } from '../utils/assets';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-monogram">
                    <img src={getAssetPath('assets/logo.png')} alt="A&L Monogram" />
                </div>
                <p className="footer-date">
                    Saturday, <br />
                    June 27, 2026
                </p>
            </div>
        </footer>
    );
}

export default Footer;
