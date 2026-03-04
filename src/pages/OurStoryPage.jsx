import { Link } from 'react-router-dom';
import ourStory1 from "@/assets/our-story1.png";
import ourStory2 from "@/assets/our-story2.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/OurStoryPage.css';

function OurStoryPage() {
    return (
        <div className="our-story-page">
            <Header />

            <main className="story-content">
                {/* Hero Photo */}
                <section className="story-hero">
                    <div className="polaroid-photo">
                        <img src={ourStory1} alt="Our first photo together" />
                        <p className="photo-date">01/10/2020</p>
                    </div>
                </section>

                {/* Story Title */}
                <h1 className="story-title">WHERE OUR STORY BEGAN</h1>

                {/* Story Text */}
                <article className="story-article">
                    <p>
                        Before there was a castle by the lake, there was a classroom in Seattle.
                    </p>

                    <p>
                        We met during our master's program at GIX, University of Washington — first as classmates, then as project partners, and slowly, as something more.
                    </p>

                    <p>
                        We built presentations, solved problems, stayed up late refining slides. What we did not realize then was that we were also building something steadier — a rhythm that felt natural.
                    </p>

                    <p>
                        Many people say graduation is a test. Careers scatter in different directions. Cities change. Plans shift.
                    </p>

                    <p>
                        We were fortunate — our work kept us both in Seattle. So we stayed. And what began as studying together became choosing to build a life together.
                    </p>

                    <div className="story-divider"></div>

                    <p className="story-highlight">That first winter, we went skiing.</p>

                    <p>
                        It was Lumi's first time on the mountain.<br />
                        She trembled her way down the slope — falling, rising, inching forward. He stayed behind her the entire day, quietly telling her to just keep moving.
                    </p>

                    <p>
                        At one point she asked why he would not ski ahead.
                    </p>

                    <p>
                        He said that if he were not behind her, he was afraid she might fall and not be able to get back up.
                    </p>

                    <p>
                        All day she could not see him in front of her — but every time she turned around, he was there.
                    </p>

                    <p className="story-highlight">That was the day she knew.</p>

                    <p>
                        Six years have passed since then. And in many ways, nothing has changed.
                    </p>

                    <p>
                        He still stands quietly behind her, steady, patient, certain — giving her the courage to try what once felt impossible, and the comfort of knowing that home is waiting at the end of the day.
                    </p>
                </article>

                {/* Second Photo */}
                <section className="story-photo-section">
                    <div className="polaroid-photo large">
                        <img src={ourStory2} alt="Disney Cruise" />
                        <p className="photo-caption">Disney Cruise</p>
                    </div>
                </section>

                {/* More Story */}
                <article className="story-article">
                    <p>
                        We are, in many ways, remarkably similar.
                    </p>

                    <p>
                        Both ENTJ.<br />
                        Both decisive.<br />
                        Both ambitious.<br />
                        We love many of the same things, dislike many of the same things — and sometimes argue for exactly the same reasons.
                    </p>

                    <p>
                        We share hobbies and find balance in others:
                    </p>

                    <p>
                        He photographs. She edits.<br />
                        He mixes cocktails. She taste-tests.<br />
                        He rewires the house. She rearranges it.
                    </p>

                    <p className="story-highlight">It works.</p>

                    <p>
                        And if there is contrast, it lives in small, endearing mysteries — she may never understand how animation can inspire such devotion, and he may never understand why a great film deserves hours of analysis.
                    </p>

                    <p>
                        But perhaps that, too, is balance.
                    </p>

                    <div className="story-divider"></div>

                    <p className="story-highlight">The castle is where we gather.</p>

                    <p>
                        A love grown steady through the years — now celebrated with you beside us.
                    </p>
                </article>

                {/* RSVP Button */}
                <div className="story-cta">
                    <Link to="/rsvp" className="cta-button">RSVP</Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default OurStoryPage;
