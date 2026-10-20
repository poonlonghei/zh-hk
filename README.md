# 香港繁體中文版網站

這是從 Chavez Poon 個人網站整理出的獨立 Next.js 專案，包含繁體中文首頁、簡介頁、共用網站元件及所需圖片與圖示。原本的 `/zh-hk/` 網站路由仍保留在 Personal Website。

## 本機預覽

需要 Node.js 22 或以上版本。在此資料夾執行：

```sh
npm ci
npm run dev
```

開啟 <http://localhost:3000/zh-hk/>。建立靜態匯出請執行 `npm run build`。

## 專案內容

- `app/` — 繁體中文首頁、簡介頁及文件版面
- `src/components/` — 導覽、頁尾及聯絡表單
- `src/styles/site.css` — 網站樣式
- `public/assets/` — 中文網站所需圖片及網站圖示
- `package.json`、`package-lock.json` — Next.js 專案依賴
