import { useParams, Navigate, Link } from 'react-router-dom';
import { getGuestById } from '../data/guests';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/GuestPage.css';

function GuestPage() {
    const { guestId } = useParams();
    const guest = getGuestById(guestId);

    // 如果找不到賓客，重定向到首頁
    if (!guest) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="guest-page">
            <Header />

            {/* Hero Section */}
            <section className="guest-hero">
                <div className="guest-hero-overlay"></div>
                <div className="guest-hero-content">
                    <h1>ALAN & LUMI</h1>
                    <p className="guest-welcome">Dear {guest.name},</p>
                    <p className="guest-invitation">
                        With love and gratitude, we invite you to<br />
                        join us for an evening at the castle.
                    </p>
                </div>
            </section>

            {/* Details Section */}
            <section className="guest-details">
                <div className="guest-info-card">
                    <h2>Your Invitation</h2>

                    <div className="info-item">
                        <h3>Date & Time</h3>
                        <p>Saturday, June 27, 2026</p>
                        <p>Ceremony at 5:00 PM</p>
                    </div>

                    <div className="info-item">
                        <h3>Venue</h3>
                        <p>Thornewood Castle</p>
                        <p>Lakewood, Washington</p>
                    </div>

                    <div className="info-item">
                        <h3>Your Table</h3>
                        <p>Table {guest.table}</p>
                    </div>

                    <div className="guest-actions">
                        <Link to="/rsvp" className="guest-rsvp-btn">RSVP</Link>
                        <Link to="/details" className="guest-details-btn">View Details</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default GuestPage;
