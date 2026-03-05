import { Link, useSearchParams } from 'react-router-dom';
import hero from "@/assets/hero.jpg";
import wine from "@/assets/wine.jpg";
import castle from "@/assets/castle.webp";
import registryDesktop from "@/assets/registry-desktop.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import '../styles/MainPage.css';

function MainPage() {
    const [searchParams] = useSearchParams();
    const guestId = searchParams.get('guestId');
    const guestQuery = guestId ? `?guestId=${guestId}` : '';

    return (
        <div className="main-page">
            <Header currentPage="main" />

            {/* Hero Title */}
            <header className="hero-header">
                <h1 className="hero-title">Alan & Lumi</h1>
            </header>

            {/* Invitation Section with Flowers Background */}
            <FadeIn>
            <main className="invitation-section">
                <div className="invitation-bg">
                    <img
                        src={hero}
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
            </FadeIn>

            {/* Our Story Card */}
            <FadeIn>
            <Link to="https://gothic-mold-31003876.figma.site/our-story" className="link-card our-story-card">
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
            </FadeIn>

            {/* The Details Card */}
            <FadeIn>
            <Link to="https://gothic-mold-31003876.figma.site/details" className="link-card details-card">
                <div className="card-media">
                    <img
                        src={wine}
                        alt="Wine background"
                        className="card-image"
                    />
                    <div className="card-overlay card-overlay-gradient"></div>
                </div>
                <div className="card-title-container">
                    <h3 className="card-title">THE DETAILS</h3>
                </div>
            </Link>
            </FadeIn>

            {/* RSVP Card */}
            <FadeIn>
            <Link to={`/rsvp${guestQuery}`} className="link-card rsvp-card">
                <div className="card-media">
                    <img
                        src={castle}
                        alt="RSVP Castle"
                        className="card-image"
                    />
                    <div className="card-overlay"></div>
                </div>
                <div className="card-title-container">
                    <h3 className="card-title">RSVP</h3>
                </div>
            </Link>
            </FadeIn>

            {/* Registry Section */}
            <FadeIn>
            <section className="registry-section">
                <div className="registry-bg">
                    <img
                        src={registryDesktop}
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
            </FadeIn>

            <Footer />
        </div>
    );
}

export default MainPage;
