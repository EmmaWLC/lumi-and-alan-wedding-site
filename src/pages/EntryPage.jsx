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
        <div className="entry-page">
            <img src={letterImg} className="entry-bg-img" alt="" aria-hidden="true" />
            <HandwritingText />
            <button className="enter-button" onClick={handleEnter}>
                Enter
            </button>
        </div>
    );
}

export default EntryPage;
