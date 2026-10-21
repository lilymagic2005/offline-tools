# 離線實用工具箱 (Offline Developer Toolbox)

一套專為軟體工程師、DevOps 與日常數據處理設計的極簡高效工具箱。**100% 純前端本機執行**，不上傳任何伺服器，完全相容離線與高隱私限制的工作環境。

---

## 核心架構亮點

* **零網路傳輸 (Zero Server Traffic)**：所有資料處理、轉換與解析均在瀏覽器端本機完成，無對外 API 連線，確保公司內部機密、連線設定與個人隱私絕對安全。
* **SPA 雙欄工作區 (Sidebar + Workspace)**：左側固定目錄導航，中央全屏載入工具視窗（IFrame 沙盒容器），支援自適應行動裝置開關。
* **統一設計語言**：全站採用統一排版規範、雙字型體系（`Noto Sans TC` + `JetBrains Mono`）、標準色調以及無干擾的剪貼簿複製提示。
* **支援本機離線運作**：只要將檔案下載至本機，即使在完全無網路、飛航模式或內網隔離環境下依然能正常運作。

---

## 工具清單與功能導覽

| 圖示 | 工具名稱 | 檔案路徑 | 功能簡介 |
| :---: | :--- | :--- | :--- |
| 📏 | **單位換算器** | `convertor.html` | 長度、重量（含港斤/台斤）、面積、體積、溫度、速度、數據容量及時間等多維度即時聯動換算。 |
| 🔣 | **JSON 格式化與多對象處理** | `json.html` | 支援標準 JSON、連續多物件與 NDJSON 解析；提供左右分欄寬度拖曳調節、樹狀節點展開/摺疊與即時關鍵字高亮搜尋。 |
| 📑 | **多 YAML 設定比對器** | `yaml-compare.html` | 同時載入多個環境設定檔（如 Dev / UAT / Prod），扁平化屬性鍵值矩陣，一目了然篩選差異、遺漏與額外欄位。 |
| 🌐 | **cURL 指令生成器** | `curl.html` | 視覺化配置 HTTP Method、URL、Headers 與 Request Body，即時組裝 cURL 命令，並支援轉換為 JavaScript (fetch) 或 Python (requests) 代碼。 |
| 🗄️ | **SQL 格式化與多行批次包裝** | `sql.html` | 包含標準 SQL 語法換行縮排美化器，以及將任意多行名單批次轉為 `IN ('A', 'B')`、JSON 陣列或自訂前後綴的包裝器。 |
| 🎨 | **CSS / 顏色轉換器** | `color.html` | HEX、RGB、HSL 色彩模型雙向即時互轉，內建原生調色盤、顏色預覽與常用 CSS 漸層語法生成。 |
| 📑 | **Markdown 表格格式化** | `mdtable.html` | 自動計算欄位最大長度並補齊空格，一鍵等寬對齊表格邊界，支援靠左、置中與靠右語法產生。 |
| 📊 | **CSV / Excel 資料轉換** | `csv.html` | 支援 RFC 4180 標準解析 CSV 與 Excel 貼上的表格資料，快速轉為格式化 JSON 物件陣列、Markdown 表格、HTML 表格或 SQL 插入語句。 |
| 🔍 | **正規表達式測試器** | `regex.html` | 即時比對 Regex Pattern 與 Flags，色彩交替高亮符合項目，展開捕獲組 (Capture Groups) 並支援文字替換預覽。 |
| 🔐 | **Base64 編解碼** | `base64.html` | 支援純文字與本地檔案轉換，提供 URL-Safe 格式切換及輸入/輸出雙向一鍵交換。 |
| 🔤 | **英文大小寫轉換** | `case.html` | 鍵入即時同步轉換 10 種命名格式，包括 camelCase、PascalCase、snake_case、CONSTANT_CASE 等。 |
| 📋 | **文字去重與排序** | `dedupe.html` | 快速清洗多行名冊，支援去除重複行、字母升降序、長度排序、反轉及自動過濾空白行。 |
| 🕒 | **時間戳與日期計算** | `timestamp.html` | 即時 Unix 時間戳時鐘、日期區間跨度計算（自動過濾工作日與週末）、目標日加減位移推算及雙向時間戳格式轉換。 |
| ⚖️ | **文本差異比對 (Diff)** | `diff.html` | 以行為單位快速比對兩段文本出入，以紅/綠色塊直觀標記刪除與新增內容。 |
| 🧮 | **IPv4 CIDR/子網計算** | `subnet.html` | 依據 IP 與遮罩長度，即時推算網絡位址、廣播位址、子網掩碼、可用主機範圍與可用主機數量。 |

---

## 專案目錄結構

```text
offline-tools/
├── index.html          # 主入口外殼 (側邊欄目錄與 Workspace 容器)
├── nav.js              # 全域工具庫 (自動清理與統一剪貼簿複製回饋)
├── README.md           # 專案說明文件
├── convertor.html      # 單位換算器
├── json.html           # JSON 格式化與多對象處理
├── yaml-compare.html   # 多 YAML 設定比對器
├── curl.html           # cURL 指令生成器
├── sql.html            # SQL 格式化與多行批次包裝
├── color.html          # CSS / 顏色轉換器
├── mdtable.html        # Markdown 表格格式化
├── csv.html            # CSV / Excel 轉換器
├── regex.html          # 正規表達式測試器
├── base64.html         # Base64 編解碼
├── case.html           # 英文大小寫轉換
├── dedupe.html         # 文字去重與排序
├── timestamp.html      # 時間戳與日期計算
├── diff.html           # 文本差異比對
└── subnet.html         # IPv4 CIDR/子網計算
```

---

## 使用方式

1. **直接開啟**：將所有檔案存放於同一個資料夾內，使用任一現代瀏覽器（Chrome、Edge、Firefox、Safari）雙擊開啟 `index.html` 即可。
2. **快速導航**：支援 URL Hash 直接定位到指定工具，例如：
   * `index.html#json` - 直接開啟 JSON 格式化
   * `index.html#yamlcmp` - 直接開啟 YAML 比對器
   * `index.html#curl` - 直接開啟 cURL 生成器
3. **安全驗證**：若需確認資料未被外傳，可按 `F12` 打開開發者工具的 **Network（網路）** 標籤頁，執行任何操作均不會產生任何對外的 HTTP 請求。
