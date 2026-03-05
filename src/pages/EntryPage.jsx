import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/EntryPage.css';

function EntryPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleEnter = () => {
        console.log('Current search params:', location.search);
        navigate(`/main${location.search}`);
    };

    return (
        <div className="entry-page">
            <div className="poem-lines">
                <p className="poem-line">A midsummer gathering.</p>
                <p className="poem-line">A castle by the lake.</p>
                <p className="poem-line">An evening where stories quietly begin.</p>
            </div>
            <button className="enter-button" onClick={handleEnter}>
                Enter
            </button>
        </div>
    );
}

export default EntryPage;
