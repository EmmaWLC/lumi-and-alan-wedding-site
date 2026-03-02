import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import '../styles/EntryPage.css';

function EntryPage() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/main');
    };

    return (
        <div className="entry-page">
            <div className="parchment">
                <div className="parchment-border">
                    <div className="parchment-content">
                        <p className="poem-line">A midsummer gathering.</p>
                        <p className="poem-line">A castle by the lake.</p>
                        <p className="poem-line">An evening where stories quietly begin.</p>

                        <div className="swan-ornament">
                            <img src={getAssetPath('assets/logo.png')} alt="Swans" />
                        </div>

                        <button className="enter-button" onClick={handleEnter}>
                            Enter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EntryPage;
