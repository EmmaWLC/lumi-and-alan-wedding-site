import { useParams, Navigate } from 'react-router-dom';
import { getGuestById } from '../data/guests';

function GuestPage() {
    const { guestId } = useParams();
    const guest = getGuestById(guestId);

    // 如果找不到賓客，重定向到首頁
    if (!guest) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="guest-page">
            <header className="wedding-header">
                <h1>Lumi & Alan</h1>
                <p className="wedding-date">2026年3月28日</p>
            </header>

            <main className="guest-content">
                <div className="welcome-message">
                    <h2>親愛的 {guest.name}</h2>
                    <p>誠摯邀請您參加我們的婚禮</p>
                </div>

                <section className="wedding-details">
                    <div className="detail-card">
                        <h3>📅 日期時間</h3>
                        <p>2026年3月28日（星期六）</p>
                        <p>下午 6:00 入場</p>
                    </div>

                    <div className="detail-card">
                        <h3>📍 宴會地點</h3>
                        <p>台北喜來登大飯店</p>
                        <p>台北市中正區忠孝東路一段12號</p>
                    </div>

                    <div className="detail-card">
                        <h3>🪑 您的座位</h3>
                        <p>第 {guest.table} 桌</p>
                    </div>
                </section>

                <section className="rsvp-section">
                    <h3>出席確認</h3>
                    <p>請於 2026年3月14日 前回覆</p>
                    {/* 可以在這裡加入 RSVP 表單 */}
                </section>
            </main>

            <footer className="wedding-footer">
                <p>期待與您共度美好時光 ❤️</p>
            </footer>
        </div>
    );
}

export default GuestPage;
