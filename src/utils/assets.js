// 處理 Vite base 路徑的圖片路徑工具
export const getAssetPath = (path) => {
    const base = import.meta.env.BASE_URL;
    // 移除開頭的斜線以避免重複
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
};

// 用於 CSS background-image 的 url()
export const getAssetUrl = (path) => {
    return `url(${getAssetPath(path)})`;
};
