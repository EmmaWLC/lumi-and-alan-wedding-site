import { guests, getAllGuestUrls } from '../data/guests';
import { useState } from 'react';

function AdminPage() {
    const [baseUrl, setBaseUrl] = useState('https://EmmaWLC.github.io/lumi-and-alan-wedding-site');
    const guestUrls = getAllGuestUrls(baseUrl);

    const copyAllUrls = () => {
        const text = guestUrls.map(g => `${g.name}: ${g.url}`).join('\n');
        navigator.clipboard.writeText(text);
        alert('已複製所有連結！');
    };

    const copyUrl = (url) => {
        navigator.clipboard.writeText(url);
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <h1>賓客連結管理</h1>
                <p>共 {guests.length} 位賓客</p>
            </header>

            <main className="admin-content">
                <div className="url-settings">
                    <label>
                        網站網址：
                        <input
                            type="text"
                            value={baseUrl}
                            onChange={(e) => setBaseUrl(e.target.value)}
                            placeholder="https://your-site.com"
                        />
                    </label>
                </div>

                <button className="copy-all-btn" onClick={copyAllUrls}>
                    📋 複製所有連結
                </button>

                <table className="guest-table">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>桌號</th>
                            <th>專屬連結</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guestUrls.map((guest, index) => (
                            <tr key={guests[index].id}>
                                <td>{guest.name}</td>
                                <td>{guests[index].table}</td>
                                <td className="url-cell">{guest.url}</td>
                                <td>
                                    <button onClick={() => copyUrl(guest.url)}>複製</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default AdminPage;
