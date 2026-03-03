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
                <p className="invitation-main">We would be honored by your presence.<br /><br />
                    Kindly respond by March 15, 2026.<br /><br />
                    For guests traveling from afar, we have reserved a room block at Marriott Tacoma Downtown for your comfort.<br /><br />
                    To ensure availability, we kindly recommend booking your accommodations by March 20, 2026.<br /></p>
            </section>

            {/* Attire Section */}
            <section className="attire-section">
                <div className="attire-content">
                    <div className="attire-info">
                        <p className="attire-title">Attire</p>
                        <br />
                        <p className="attire-type">Garden Formal</p>
                        <br />
                        <p className="attire-description">
                            We invite you to dress in rich,
                            earthy tones inspired by the
                            castle and the surrounding
                            landscape.
                        </p>
                        <br />
                        <p className="attire-colors">
                            Suggested colors include:
                            <span className="color-list">Chestnut Brown, Moss Green,
                                Classic Black, Warm Khaki, and
                                Charcoal Gray.</span>
                        </p>
                        <br />
                        <p className="attire-note">
                            Suits, gowns, and thoughtfully
                            tailored silhouettes are
                            encouraged.
                        </p>
                    </div>

                </div>
                <div className="attire-color-palette">
                    <div className="attire-color-blocks">
                        <div className="attire-color-block color1"></div>
                        <div className="attire-color-block color2"></div>
                        <div className="attire-color-block color3"></div>
                        <div className="attire-color-block color4"></div>
                        <div className="attire-color-block color5"></div>
                    </div>
                    <div className="attire-dresscode-img">
                        <img src={getAssetPath('assets/dressCode.jpg')} alt="Dresscode" />
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
