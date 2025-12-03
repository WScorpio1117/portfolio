# 白蠍 WhiteScorpio - 個人作品集網站

個人攝影作品集與創作者檔案網站。

## 🎯 功能特性

- ✨ 響應式設計，支持多設備
- 🌐 雙語支持（繁體中文 / English）
- 📱 現代化 UI 設計
- 🖼️ 攝影作品展示
- 📝 個人介紹與技能展示
- 🔗 社群媒體連結

## 🚀 快速開始

### 本地開發

1. **複製檔案**
   ```bash
   git clone https://github.com/WScorpio1117/portfolio.git
   cd portfolio
   ```

2. **開啟網站**
   - 直接在瀏覽器中打開 `index.html`
   - 或使用本地伺服器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (需先安裝 http-server)
   npx http-server
   ```
   
   然後訪問 `http://localhost:8000`

3. **編輯內容**
   - 編輯 `index.html` 中的數據部分
   - 修改 CSS 自訂樣式
   - 添加攝影作品連結

## 📁 文件結構

```
portfolio/
├── index.html           # 主網頁文件
├── scripts/
│   └── test.js         # 功能檢查腳本
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions 工作流
├── .gitignore          # Git 忽略文件
└── README.md           # 本文件
```

## 🔧 技術堆棧

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- GitHub Actions (自動部署)

## 📸 添加作品

在 `appState.data.portfolio` 中添加新作品：

```javascript
{
  id: 3,
  title_zh: '作品標題',
  title_en: 'Project Title',
  desc_zh: '簡短描述',
  desc_en: 'Short description',
  desc_full_zh: '完整描述（繁體中文）',
  desc_full_en: 'Full description (English)',
  hidden: false,
  link: 'https://your-link.com',
  image_url: 'https://your-image-url.jpg'
}
```

## 🌐 部署到 GitHub Pages

網站已配置自動部署到 GitHub Pages。每次推送到 `main` 分支時：
1. ✅ 自動運行功能檢查
2. 📤 生成測試報告
3. 🚀 自動部署到 GitHub Pages

訪問：`https://WScorpio1117.github.io/portfolio`

## ✅ 功能檢查

自動化檢查項目：
- ✓ HTML 有效性
- ✓ 外部連結可訪問性
- ✓ 必需元素存在
- ✓ 社群媒體連結格式

## 📝 更新日誌

### v1.0 (2025-12-02)
- 初始發佈
- 基礎功能完整
- 自動化部署配置

## 🤝 聯繫方式

- 📸 Instagram: [@yourinstagram](https://instagram.com)
- 💬 Discord: [伺服器連結](#)
- 📧 攝影工作信箱: [email]

## 📄 許可證

© 2025 白蠍 WhiteScorpio. 版權所有。