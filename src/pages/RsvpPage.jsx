import { useState } from 'react';
import { getAssetPath } from '../utils/assets';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/RsvpPage.css';

function RsvpPage() {
    const [formData, setFormData] = useState({
        name: '',
        attending: '',
        dietary: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('RSVP submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="rsvp-page">
            <Header />

            {/* Hero Section */}
            <section className="rsvp-hero" style={{ backgroundImage: `url(${getAssetPath('assets/castle.webp')})` }}>
                <div className="rsvp-hero-overlay"></div>
                <h1 className="rsvp-hero-title">RSVP</h1>
            </section>

            {/* Invitation Message */}
            <section className="rsvp-invitation">
                <p className="invitation-main">We would be honored by your presence.</p>
                <p className="invitation-deadline">Kindly respond by March 15, 2026.</p>
            </section>

            {/* Attire Section */}
            <section className="attire-section">
                <div className="attire-content">
                    <div className="attire-info">
                        <h2 className="attire-title">Attire</h2>
                        <p className="attire-type">Garden Formal</p>
                        <p className="attire-description">
                            We invite you to dress in rich,<br />
                            earthy tones inspired by the<br />
                            castle and the surrounding<br />
                            landscape.
                        </p>
                        <p className="attire-colors">
                            Suggested colors include:<br />
                            <span className="color-list">Chestnut Brown, Moss Green,<br />
                                Classic Black, Warm Khaki, and<br />
                                Charcoal Gray.</span>
                        </p>
                        <p className="attire-note">
                            Suits, gowns, and thoughtfully<br />
                            tailored silhouettes are<br />
                            encouraged.
                        </p>
                    </div>
                    <div className="attire-images">
                        <div className="attire-grid">
                            <img src={getAssetPath('assets/Group 2.png')} alt="Attire inspiration" />
                            <img src={getAssetPath('assets/Group 3.png')} alt="Attire inspiration" />
                            <img src={getAssetPath('assets/Group 4.png')} alt="Attire inspiration" />
                            <img src={getAssetPath('assets/Group 5.png')} alt="Attire inspiration" />
                            <img src={getAssetPath('assets/Group 6.png')} alt="Attire inspiration" />
                            <img src={getAssetPath('assets/Group 7.png')} alt="Attire inspiration" />
                        </div>
                    </div>
                </div>
            </section>

            {/* RSVP Form */}
            <section className="rsvp-form-section">
                {submitted ? (
                    <div className="rsvp-success">
                        <h3>Thank you for your response!</h3>
                        <p>We look forward to celebrating with you.</p>
                    </div>
                ) : (
                    <form className="rsvp-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Will you be joining us? *</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="yes"
                                        checked={formData.attending === 'yes'}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span>With joy</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="no"
                                        checked={formData.attending === 'no'}
                                        onChange={handleChange}
                                    />
                                    <span>Regretfully unable to attend</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dietary">Dietary Preferences</label>
                            <input
                                type="text"
                                id="dietary"
                                name="dietary"
                                value={formData.dietary}
                                onChange={handleChange}
                                placeholder="Any allergies or dietary restrictions?"
                            />
                        </div>

                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                )}
            </section>

            <Footer />
        </div>
    );
}

export default RsvpPage;
