import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">ALAN & LUMI</h1>
                </div>
                <div className="hero-image-container">
                    <img src={getAssetPath('assets/hero.jpg')} alt="Alan and Lumi" className="hero-image" />
                </div>
                <div className="hero-info">
                    <p className="hero-invitation">
                        With love and gratitude, we invite you to<br />
                        join us for an evening at the castle.
                    </p>
                    <p className="hero-date">Saturday, June 27, 2026</p>
                    <p className="hero-location">Thornewood Castle,<br />Lakewood, Washington</p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section section-dark">
                <Link to="/our-story" className="section-link">
                    <h2 className="section-title">OUR STORY</h2>
                </Link>
            </section>

            {/* The Details Section */}
            <section className="section section-image" style={{ backgroundImage: `url(${getAssetPath('assets/castle.webp')})` }}>
                <Link to="/details" className="section-link">
                    <h2 className="section-title">THE DETAILS</h2>
                </Link>
            </section>

            {/* RSVP Section */}
            <section className="section section-image" style={{ backgroundImage: `url(${getAssetPath('assets/reception.jpg')})` }}>
                <Link to="/rsvp" className="section-link">
                    <h2 className="section-title">RSVP</h2>
                </Link>
            </section>

            {/* Registry Section */}
            <section className="section section-registry">
                <h2 className="section-title">REGISTRY</h2>
                <p className="registry-text">
                    Your presence is the most cherished gift. Should you wish to<br />
                    honor us further, we have arranged a honeymoon fund for<br />
                    the journey that follows.
                </p>
                <p className="registry-venmo">
                    Venmo: <a href="https://venmo.com/LumiWei" target="_blank" rel="noopener noreferrer">@LumiWei</a>
                </p>
            </section>

            <Footer />
        </div>
    );
}

export default MainPage;
