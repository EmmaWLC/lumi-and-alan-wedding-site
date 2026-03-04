import { useParams, Navigate } from 'react-router-dom';
import { getGuestById } from '../data/guests';

function GuestPage() {
    const { guestId } = useParams();
    const guest = getGuestById(guestId);

    if (!guest) {
        return <Navigate to="/" replace />;
    }

    return <Navigate to={`/?guestId=${guestId}`} replace />;
}

export default GuestPage;
