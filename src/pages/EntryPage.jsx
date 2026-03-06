import { useNavigate, useLocation } from 'react-router-dom';
import letterImg from '@/assets/letter.jpg';
import HandwritingText from '../components/HandwritingText';
import '../styles/EntryPage.css';

function EntryPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleEnter = () => {
        navigate(`/main${location.search}`);
    };

    return (
        <div className="entry-page" onClick={handleEnter}>
            <img src={letterImg} className="entry-bg-img" alt="" aria-hidden="true" />
            <HandwritingText />
            <span className="enter-button">Enter</span>
        </div>
    );
}

export default EntryPage;
