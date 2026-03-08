import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGuestById } from '../data/guests';
import castleImg from "@/assets/castle.webp";
import dressCode from "@/assets/dress-code.jpg";
import cardBack from "@/assets/card-back.jpg";
import table1 from "@/assets/table-1.jpg";
import table2 from "@/assets/table-2.jpg";
import table3 from "@/assets/table-3.jpg";
import table4 from "@/assets/table-4.jpg";
import table5 from "@/assets/table-5.jpg";
import table6 from "@/assets/table-6.jpg";
import table7 from "@/assets/table-7.jpg";
import table8 from "@/assets/table-8.jpg";
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import '../styles/RsvpPage.css';

const tablePhotos = { 1: table1, 2: table2, 3: table3, 4: table4, 5: table5, 6: table6, 7: table7, 8: table8 };

function RsvpPage() {
    const [searchParams] = useSearchParams();
    const guestId = searchParams.get('guestId');
    const guest = guestId ? getGuestById(guestId) : null;
    const isLocal = guest?.local === 'yes';

    const [formData, setFormData] = useState({
        name: '',
        attending: '',
        dietary: '',
        shuttle: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const [spinKey, setSpinKey] = useState(0);
    const revealRef = useRef(null);

    useEffect(() => {
        if (submitted && !revealed && revealRef.current) {
            setTimeout(() => {
                revealRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }, [submitted, revealed]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("access_key", "6fb82a4f-279a-438a-9cb1-6e2ca0fa6160");
        if (guestId) data.append("guestId", guestId);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        });

        const result = await response.json();
        if (result.success) {
            setSubmitted(true);
        }
    };

    return (
        <div className="rsvp-page">
            <Header />

            {/* Hero Section */}
            <section className="rsvp-hero" style={{ backgroundImage: `url(${castleImg})` }}>
                <div className="rsvp-hero-overlay"></div>
                <h1 className="rsvp-hero-title">RSVP</h1>
            </section>

            {/* Invitation Message */}
            <FadeIn>
                <section className="rsvp-invitation">
                    {isLocal ? (
                        <p className="invitation-main-local">We would be honored by your presence.<br /><br />
                            Please RSVP by March 20, 2026.</p>
                    ) : (
                        <><p className="invitation-main">We would be honored by your presence.<br /><br />
                            Please RSVP by March 20, 2026.<br /><br />
                            For guests traveling from afar, a room block is reserved at Marriott Tacoma Downtown.<br /><br />
                            To ensure availability, we kindly recommend booking your accommodations by the end of March.<br /></p><a href="https://app.marriott.com/reslink?id=1772215904964&key=GRP&app=resvlink" className="book-a-room" target="_blank" rel="noopener noreferrer">BOOK A ROOM</a></>
                    )}


                </section>
            </FadeIn>

            {/* Attire Section */}
            <FadeIn>
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
                                Suggested colors include:&nbsp;
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
                    </div>
                    <div className="attire-dresscode-img">
                        <img src={dressCode} alt="Dresscode" />
                    </div>
                </section>
            </FadeIn>
            <FadeIn>
                <hr className="divider" />
            </FadeIn>

            {/* RSVP Form */}
            <FadeIn>
                <section className="rsvp-form-section">
                    {submitted && (formData.attending === 'no' || !guest) ? (
                        <div className="rsvp-declined">
                            <p className="rsvp-thank-you">Thank you for submitting the form.</p>
                        </div>
                    ) : submitted && !revealed ? (
                        <div className="rsvp-card-reveal" ref={revealRef} onClick={() => setRevealed(true)}>
                            <p className="reveal-prompt" >Tap the card to reveal your team</p>
                            {guest?.table && tablePhotos[guest.table] && (
                                <div className="card-magic-wrapper">
                                    <div className="card-flip-container card-static">
                                        <div className="card-flip-inner card-no-animation">
                                            <div className="card-flip-back">
                                                <img src={cardBack} alt="Card back" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ) : submitted && revealed ? (
                        <div className="rsvp-success">
                            <p className="guest-name">{formData.name},</p><br />
                            <p className="rsvp-thank-you">Your reply has been sealed.</p><br />
                            <p>On June 27, you’ll be part of</p><br />
                            <p className="guest-name">{guest?.team}</p><br />
                            <p>A quiet little chapter in the evening’s story.</p><br />
                            <p>Nothing to prepare.</p><br />
                            <p>Just arrive curious.</p>
                            {guest?.table && tablePhotos[guest.table] && (
                                <div className="card-magic-wrapper">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className={`sparkle sparkle-${i + 1}`} />
                                    ))}
                                    <div className="card-flip-container" onClick={() => setSpinKey(k => k + 1)}>
                                        <div className="card-flip-inner" key={spinKey}>
                                            <div className="card-flip-back">
                                                <img src={cardBack} alt="Card back" />
                                            </div>
                                            <div className="card-flip-front">
                                                <img src={tablePhotos[guest.table]} alt={`Table ${guest.table} group`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
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
                                <label htmlFor="attending">Will you be joining us? *</label>
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
                                        <span className='form-yes'>With joy</span>
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="no"
                                            checked={formData.attending === 'no'}
                                            onChange={handleChange}
                                        />
                                        <span className='form-no'>Regretfully unable to attend</span>
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

                            <div className="form-group">
                                <label htmlFor="shuttle">Will you be taking the shuttle between the hotel and the venue? *</label>
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="shuttle"
                                            value="yes"
                                            checked={formData.shuttle === 'yes'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span className='form-yes'>Yes, I will take the shuttle</span>
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="shuttle"
                                            value="no"
                                            checked={formData.shuttle === 'no'}
                                            onChange={handleChange}
                                        />
                                        <span className='form-no'>No, I will arrange my own transportation</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">SUBMIT</button>
                        </form>
                    )}
                </section>
            </FadeIn>

            <Footer />
        </div>
    );
}

export default RsvpPage;
