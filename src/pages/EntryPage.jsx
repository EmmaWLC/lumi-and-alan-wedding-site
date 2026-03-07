import { useNavigate, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import letterImg from '@/assets/letter-blank.jpg';
import HandwritingText from '../components/HandwritingText';
import '../styles/EntryPage.css';
import { getGuestById } from '../data/guests';

function EntryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const guestId = searchParams.get('guestId');
    const guest = guestId ? getGuestById(guestId) : null;

    const handleEnter = () => {
        navigate(`/main${location.search}`);
    };

    return (
        <div className="entry-page" onClick={handleEnter}>
            <img src={letterImg} className="entry-bg-img" alt="" aria-hidden="true" />
            <HandwritingText />
            <span className="enter-name">{guest?.name}</span>
            <span className="enter-button">Enter</span>
        </div>
    );
}

export default EntryPage;
