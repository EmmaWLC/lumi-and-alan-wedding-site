import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/DetailsPage.css';

function DetailsPage() {
    return (
        <div className="details-page">
            <Header />

            {/* Hero Section */}
            <section className="details-hero">
                <div className="details-hero-overlay"></div>
                <h1 className="details-hero-title">THE DETAILS</h1>
            </section>

            {/* Venue Description */}
            <section className="venue-section">
                <div className="venue-content">
                    <p>
                        We invite you to join us at Thornewood Castle, a<br />
                        lakeside estate of stone and ivy,<br />
                        where old world architecture meets summer light.
                    </p>
                    <p>
                        It felt, to us, like a place where stories belong.
                    </p>
                    <p>
                        And where a new chapter begins.
                    </p>
                    <Link to="/rsvp" className="venue-rsvp-btn">RSVP</Link>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="photo-gallery">
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={getAssetPath('assets/date.jpg')} alt="Wedding venue" />
                    </div>
                    <div className="gallery-item">
                        <img src={getAssetPath('assets/wine.jpg')} alt="Wine celebration" />
                    </div>
                    <div className="gallery-item">
                        <img src={getAssetPath('assets/reception.jpg')} alt="Reception" />
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="schedule-section">
                <div className="schedule-grid">
                    <div className="schedule-item">
                        <h3>Date</h3>
                        <p>Saturday, June 27, 2026</p>
                    </div>
                    <div className="schedule-item">
                        <h3>Venue</h3>
                        <p>Thornewood Castle,<br />Lakewood, Washington</p>
                    </div>
                    <div className="schedule-item">
                        <h3>Ceremony</h3>
                        <p>5:00 PM<br />The ceremony will be outdoors.</p>
                    </div>
                    <div className="schedule-item">
                        <h3>Reception</h3>
                        <p>6:00PM – 10:00 PM</p>
                    </div>
                    <div className="schedule-item">
                        <h3>Dress Code</h3>
                        <p>Semi-formal attire.<br />Avoid stilettos and sharp<br />heels, as the ceremony<br />is on grass.</p>
                    </div>
                    <div className="schedule-item">
                        <h3>Dress</h3>
                        <p>In Soho-inspired dress —<br />trend to modern and classy!<br />The evening will be outdoors.</p>
                    </div>
                </div>
            </section>

            {/* Travel & Stay */}
            <section className="travel-section">
                <div className="travel-hero" style={{ backgroundImage: `url(${getAssetPath('assets/travel and stay bg.jpeg')})` }}>
                    <h2 className="travel-title">TRAVEL & STAY</h2>
                </div>

                <div className="travel-content">
                    <div className="travel-info">
                        <p>
                            Thornewood Castle is located in<br />
                            Lakewood, Washington,<br />
                            approximately 40 minutes from<br />
                            Seattle-Tacoma International<br />
                            Airport.
                        </p>
                        <p>
                            Rideshare services are easily<br />
                            accessible.
                        </p>
                        <p>
                            On-site parking will be<br />
                            provided for guests.
                        </p>
                    </div>

                    <div className="hotel-info">
                        <p className="hotel-intro">
                            For those traveling from afar, we<br />
                            have partnered with:
                        </p>
                        <h3 className="hotel-name">MARRIOTT TACOMA<br />DOWNTOWN</h3>
                        <p>
                            A modern and comfortable stay in<br />
                            the heart of Tacoma, approximately<br />
                            15 minutes from the venue.
                        </p>
                        <p>
                            To reserve your stay, we encourage<br />
                            booking via Phone: (253) 591-5500, or<br />
                            available 3rd party reseller. Marriott<br />
                            Rewards eligible.
                        </p>
                    </div>
                </div>

                <div className="hotel-image">
                    <img src={getAssetPath('assets/hotel.jpg')} alt="Marriott Tacoma Downtown" />
                </div>
            </section>

            {/* Registry Section */}
            <section className="details-registry">
                <h2 className="details-registry-title">REGISTRY</h2>
                <p className="details-registry-text">
                    Your presence is the most cherished gift. Should you wish to<br />
                    honor us further, we have arranged a honeymoon fund for<br />
                    the journey that follows.
                </p>
                <p className="details-registry-venmo">
                    Venmo: <a href="https://venmo.com/LumiWei" target="_blank" rel="noopener noreferrer">@LumiWei</a>
                </p>
            </section>

            <Footer />
        </div>
    );
}

export default DetailsPage;
