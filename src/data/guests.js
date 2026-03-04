// 賓客資料 - 請在這裡填入你的80位賓客
// 每位賓客有唯一的 id 作為 URL 路徑

export const guests = [
    // 第 1 桌
    { id: 'guest-001', team: 'Sir Ollie', table: 1, local: 'no', name: 'Lumi Dad' },
    { id: 'guest-002', team: 'Sir Ollie', table: 1, local: 'no', name: 'Lumi Mom' },
    { id: 'guest-003', team: 'Sir Ollie', table: 1, local: 'no', name: 'Alan Dad' },
    { id: 'guest-004', team: 'Sir Ollie', table: 1, local: 'no', name: 'Alan Mom' },
    { id: 'guest-005', team: 'Sir Ollie', table: 1, local: 'no', name: 'Alan Brother' },
    { id: 'guest-006', team: 'Sir Ollie', table: 1, local: 'no', name: 'Alan Grandma' },
    // 第 2 桌
    { id: 'guest-007', team: 'Captain Ollie', table: 2, local: 'yes', name: 'Peggy He' },
    { id: 'guest-008', team: 'Captain Ollie', table: 2, local: 'yes', name: 'Kevin Jiang' },
    { id: 'guest-009', team: 'Captain Ollie', table: 2, local: 'yes', name: 'Kipp Hung' },
    { id: 'guest-010', team: 'Captain Ollie', table: 2, local: 'yes', name: 'Hugo Palomares' },
    { id: 'guest-011', team: 'Captain Ollie', table: 2, local: 'yes', name: 'ZengSha Guo' },
    { id: 'guest-012', team: 'Captain Ollie', table: 2, local: 'no', name: 'Billy Chou' },
    // 第 3 桌
    { id: 'guest-013', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Bianka Gu' },
    { id: 'guest-014', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Zhouheng Sun' },
    { id: 'guest-015', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Olivia Zhang' },
    { id: 'guest-016', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Lin Fei' },
    { id: 'guest-017', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Ignatius Liu' },
    { id: 'guest-018', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Amy Chen' },
    { id: 'guest-019', team: 'Court Bard Ollie', table: 3, local: 'yes', name: 'Hao Liu' },
    // 第 4 桌
    { id: 'guest-020', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Kelsey Guo' },
    { id: 'guest-021', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Keith Huynh' },
    { id: 'guest-022', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Lyu-Ting Wu' },
    { id: 'guest-023', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Chen Ma' },
    { id: 'guest-024', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Tommy Ho' },
    { id: 'guest-025', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Vivian Wang' },
    { id: 'guest-026', team: 'Castle Gardener Ollie', table: 4, local: 'no', name: 'Sam Swain' },
    { id: 'guest-027', team: 'Castle Gardener Ollie', table: 4, local: 'yes', name: 'Siyao Xiao' },
    { id: 'guest-028', team: 'Castle Gardener Ollie', table: 4, local: 'yes', name: 'Wenyuan Zhang' },
    // 第 5 桌
    { id: 'guest-029', team: 'Duke Kino', table: 5, local: 'no', name: 'Haoyi Gao' },
    { id: 'guest-030', team: 'Duke Kino', table: 5, local: 'no', name: 'Kristine Huang' },
    { id: 'guest-031', team: 'Duke Kino', table: 5, local: 'no', name: 'Weilun Qian' },
    { id: 'guest-032', team: 'Duke Kino', table: 5, local: 'no', name: 'Ricco Gao' },
    { id: 'guest-033', team: 'Duke Kino', table: 5, local: 'yes', name: 'Fengge Yu' },
    { id: 'guest-034', team: 'Duke Kino', table: 5, local: 'yes', name: 'Meiyi Guo' },
    { id: 'guest-035', team: 'Duke Kino', table: 5, local: 'no', name: 'Victor Lou' },
    { id: 'guest-036', team: 'Duke Kino', table: 5, local: 'no', name: 'Haiying Wei' },
    // 第 6 桌
    { id: 'guest-037', team: 'Royal Archivist Kino', table: 6, local: 'yes', name: 'Tianke Li' },
    { id: 'guest-038', team: 'Royal Archivist Kino', table: 6, local: 'yes', name: 'Difei Lu' },
    { id: 'guest-039', team: 'Royal Archivist Kino', table: 6, local: 'no', name: 'Wenjing Zhang' },
    { id: 'guest-040', team: 'Royal Archivist Kino', table: 6, local: 'no', name: 'Shijie Luo' },
    { id: 'guest-041', team: 'Royal Archivist Kino', table: 6, local: 'no', name: 'Yue Yang' },
    { id: 'guest-042', team: 'Royal Archivist Kino', table: 6, local: 'no', name: 'Menghan Zhang' },
    { id: 'guest-043', team: 'Royal Archivist Kino', table: 6, local: 'no', name: 'Jianbin Huang' },
    { id: 'guest-044', team: 'Royal Archivist Kino', table: 6, local: 'yes', name: 'Emma Chen' },
    // 第 7 桌
    { id: 'guest-045', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Shiqiu Sun' },
    { id: 'guest-046', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Lifeng Wei' },
    { id: 'guest-047', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Qixin Ding' },
    { id: 'guest-048', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Zinan Zhang' },
    { id: 'guest-049', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Han Qiu' },
    { id: 'guest-050', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Bo Xu' },
    { id: 'guest-051', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Zeno Xu' },
    { id: 'guest-052', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Zheru Jin' },
    { id: 'guest-053', team: 'Alchemy Master Kino', table: 7, local: 'yes', name: 'Jian Li' },
    // 第 8 桌
    { id: 'guest-054', team: 'Jester Kino', table: 8, local: 'yes', name: 'Jiwen Wu' },
    { id: 'guest-055', team: 'Jester Kino', table: 8, local: 'yes', name: 'Wendy Wei' },
    { id: 'guest-056', team: 'Jester Kino', table: 8, local: 'no', name: 'Yuchong Xiang' },
    { id: 'guest-057', team: 'Jester Kino', table: 8, local: 'no', name: 'Yichao Wang' },
    { id: 'guest-058', team: 'Jester Kino', table: 8, local: 'yes', name: 'Tim Yang' },
];

// 根據 ID 查找賓客
export const getGuestById = (guestId) => {
    return guests.find(guest => guest.id === guestId);
};

// 所有賓客 URL 列表（方便你複製分享）
export const getAllGuestUrls = (baseUrl = '') => {
    return guests.map(guest => ({
        name: guest.name,
        url: `${baseUrl}/guest/${guest.id}`
    }));
};
