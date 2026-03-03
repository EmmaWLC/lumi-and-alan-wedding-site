import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <Header currentPage="main" />

            {/* Hero Title */}
            <header className="hero-header">
                <h1 className="hero-title">Alan & Lumi</h1>
            </header>

            {/* Invitation Section with Flowers Background */}
            <main className="invitation-section">
                <div className="invitation-bg">
                    <img
                        src={getAssetPath('assets/hero.jpg')}
                        alt="Delicate flowers"
                        className="invitation-bg-image"
                    />
                    <div className="invitation-overlay"></div>
                </div>
                <div className="invitation-content">
                    <p className="invitation-text">
                        With love and gratitude, we invite you to join us for an evening at the castle.
                    </p>
                    <p className="invitation-details">
                        Saturday, June 27, 2026<br />
                        Thornewood Castle,<br />
                        Lakewood, Washington
                    </p>
                </div>
            </main>


            {/* Our Story Card */}
            <Link to="/our-story" className="link-card our-story-card">
                <div
                    className="card-media card-media-video"
                >
                    <iframe
                        className="card-video-bg"
                        src="https://www.youtube.com/embed/yR8_5dMqu84?autoplay=1&mute=1&controls=0&loop=1&playlist=yR8_5dMqu84&modestbranding=1&showinfo=0&rel=0"
                        title="YouTube video player"
                    ></iframe>
                    <svg
                        className="card-video-mask"
                    >
                        <defs>
                            <mask id="mask-hole">
                                <rect width="100%" height="100%" fill="white" />
                                <rect x="15" y="15" width="calc(100% - 30px)" height="calc(100% - 30px)" rx="10" fill="black" />
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill="black" mask="url(#mask-hole)" />
                    </svg>
                </div>

                <div className="card-title-container" >
                    <h3 className="card-title">OUR STORY</h3>
                </div>
            </Link>

            {/* The Details Card */}
            <Link to="/details" className="link-card details-card">
                <div className="card-media">
                    <img
                        src={getAssetPath('assets/wine.jpg')}
                        alt="Wine background"
                        className="card-image"
                    />
                    <div className="card-overlay card-overlay-gradient"></div>
                </div>
                <div className="card-title-container">
                    <h3 className="card-title">THE DETAILS</h3>
                </div>
            </Link>

            {/* RSVP Card */}
            <Link to="/rsvp" className="link-card rsvp-card">
                <div className="card-media">
                    <img
                        src={getAssetPath('assets/castle.webp')}
                        alt="RSVP Castle"
                        className="card-image"
                    />
                    <div className="card-overlay"></div>
                </div>
                <div className="card-title-container">
                    <h3 className="card-title">RSVP</h3>
                </div>
            </Link>

            {/* Registry Section */}
            <section className="registry-section">
                <div className="registry-bg">
                    <img
                        src={getAssetPath('assets/registry desktop.png')}
                        alt="Registry Home"
                        className="registry-bg-image"
                    />
                </div>
                <div className="registry-content">
                    <h4 className="registry-title">REGISTRY</h4>
                    <div className="registry-text-container">
                        <p className="registry-text">
                            Your presence is the most cherished gift. Should you wish to honor us further, we have arranged a honeymoon fund for the journey that follows.<br /><br /><span className="registry-venmo">Venmo: @LumiWei</span>
                        </p>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default MainPage;
