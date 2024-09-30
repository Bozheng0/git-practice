## 安裝的 nodejs 版本
- v20.17.0  
- 原因：
    1. Node.js v20.17.0 是目前的 LTS 版本，為長期使用而設計。  
    2. 開發工具、框架（如 Express、NestJS 等）和許多第三方模組優先支援 LTS 版本
    3. LTS 版本簡單、穩定，適合學習和開發基礎應用，不會被頻繁的版本更新而打亂學習進度。
    4. 相較於 Current 版本，LTS 版本會較少引入不穩定或實驗性功能，適合希望保持穩定開發的使用者。

<br>
</br>

## nvm 與 npm 分別是什麼
### 1. nvm (Node Version Manager)
- 用於管理和切換 Node.js 版本，可以根據不同專案的需求選擇合適的 Node.js 版本。

    ```bash
    # 安裝 Node.js 12.22.9 版
    nvm install 12.22.9

    # 安裝最新的 LTS 版本
    nvm install --lts

    # 切換到 Node.js 14.19.3 版
    nvm use 14.19.3

    # 卸載 Node.js 12.22.9 版
    nvm uninstall 12.22.9

    # 將 Node.js 版本 16.20.0 設定為預設版本
    nvm alias default 16.20.0

    # 顯示可用的 Node.js 版本
    nvm ls-remote

    # 切換回預設版本
    nvm use default
    ```
    參考來源：<https://github.com/nvm-sh/nvm>

### 2. npm (Node Package Manager)
- 用於管理專案中的 JavaScript 套件，可協助安裝、更新套件，讓開發過程更高效及模組化。

    ```bash
    # 初始化一個新的 Node.js 專案，創建 package.json
    npm init -y

    # 安裝特定版本的套件，例如 Express 版本 4.17.3
    npm install express@4.17.3

    # 安裝最新版本的套件，例如 lodash
    npm install lodash

    # 升級某個已安裝的套件，例如 Express
    npm update express

    # 卸載一個套件，例如 lodash
    npm uninstall lodash

    # 列出已安裝的套件
    npm list

    # 生成 package-lock.json 文件
    npm install

    # 查看可用的套件版本
    npm view express versions --json
    ```
    參考來源：<https://docs.npmjs.com/packages-and-modules>

- `package.json` 的檔案結構：  
`package.json` 是 Node.js 專案的核心配置文件，其中包含專案的基本資訊、依賴關係和其他設定，當使用 npm 時會自動生成，也可以手動編輯。

    ```bash
    {
        "name": "my-project",
        "version": "1.0.0",
        "description": "This is my awesome project.",
        "main": "index.js",
        "scripts": {
            "start": "node index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "dependencies": {
            "express": "^4.17.1",
            "mongoose": "^5.11.15"
        },
        "devDependencies": {
            "mocha": "^8.2.1",
            "eslint": "^7.17.0"
        },
        "repository": {
            "type": "git",
            "url": "https://github.com/username/my-project.git"
        },
        "keywords": ["node", "express", "mongodb"],
        "author": "John Doe <john.doe@example.com>",
        "license": "MIT",
        "engines": {
            "node": ">=14.0.0",
            "npm": ">=6.0.0"
        },
        "peerDependencies": {
            "react": "^17.0.0"
        },
        "optionalDependencies": {
            "fsevents": "^2.1.2"
        },
        "files": [
            "index.js",
            "lib/"
        ],
        "config": {
            "port": "8080"
        },
        "bugs": {
            "url": "https://github.com/username/my-project/issues"
        }
    }
    ```
- **專案名稱 (name)**:
提供專案的名稱，通常以小寫和無空格的字串表示。這對於專案的識別至關重要。

- **版本號 (version)**:
定義專案的版本，遵循語義化版本控制（SemVer）格式，幫助開發者了解專案的更新和變更。

- **描述 (description)**:
簡短說明專案的功能或用途，幫助其他開發者快速了解專案的目的。

- **主入口檔案 (main)**:
指定專案的主要進入點，讓其他模組能夠正確引用這個檔案，通常是應用的主程式。

- **執行腳本 (scripts)**:
定義自動化命令，可以使用 npm run <script_name> 執行，例如啟動伺服器或運行測試。這提升了開發效率。

- **相依套件 (dependencies)**:
列出專案在運行時所需的相依套件及其版本，這些套件會在執行 npm install 時安裝，確保應用能正確運行。

- **開發階段相依套件 (devDependencies)**:
列出在開發過程中所需的工具和庫，如測試框架和編碼風格檢查工具，這些套件不會在生產環境下使用。

- **版本控制資訊 (repository)**:
提供專案的版本控制系統類型和網址，便於開發者訪問源碼。

- **關鍵字 (keywords)**:
定義一組與專案相關的關鍵字，方便在 npm registry 中搜尋，增強專案的可發現性。

- **作者資訊 (author)**:
指定專案的作者及其聯繫方式，便於其他開發者聯繫。

- **授權 (license)**:
定義專案的授權條款，告知使用者專案的使用限制和規範，常見的有 MIT、GPL 等開源授權。

- **引擎要求 (engines)**:
指定專案運行所需的 Node.js 和 npm 版本，幫助開發者確保環境兼容性。

- **對等相依套件 (peerDependencies)**:
定義某些相依套件的版本要求，通常用於插件或庫，提示使用者應手動安裝。

- **可選相依套件 (optionalDependencies)**:
定義在安裝過程中可選的相依套件，這些套件的安裝失敗不會影響專案的運行。

- **發佈檔案 (files)**:
列出應包含在 npm 發佈包中的檔案或資料夾，確保發佈的內容正確無誤。

- **環境變數 (config)**:
定義應用程式所需的環境變數，便於在不同環境中進行配置。

- **問題追蹤 (bugs)**:
提供一個 URL，讓使用者可以報告問題或錯誤，增強社群的互動性。

<br></br>

## 補充：npm 如何透過 package.json 檔案運作 ?

- npm install 的運作原理是根據 package.json 中的相依列表，解析其版本範圍，然後下載、安裝所需的相依套件，並更新 package-lock.json 以鎖定安裝的具體版本，最後在 node_modules 資料夾中構建完整的相依樹狀結構。

- 步驟：
### 1. **讀取 package.json**：  
npm 會先讀取專案根目錄下的 package.json 檔案，檢查其中的 dependencies 和 devDependencies，這些部分列出專案所需的相依套件及其版本。

### 2. **解析相依套件**：
npm 會檢查 dependencies 和 devDependencies 中列出的每個套件。這些套件可以是具體的版本號（如 express": "4.17.1"）、版本範圍（如 ^4.0.0）或其他形式（如 latest）。
- 如果沒有指定版本，npm 會安裝最新的穩定版本。

### 3. **檢查現有套件**：
在安裝之前，npm 會檢查 node_modules 資料夾，看看是否已經存在這些相依套件。如果已存在，npm 會根據版本需求來決定是否更新或重新安裝套件。

### 4. **下載和安裝相依套件**：
如果某個套件不存在或需要更新，npm 會從註冊中心（默認為 npm registry）下載最新版本的套件。它會根據 package.json 中的版本要求來選擇適當的版本。

### 5. **建立 package-lock.json**：
安裝完成後，npm 會更新或生成一個 package-lock.json 檔案。  
package-lock.json 詳細列出每個安裝的相依套件、具體的版本號和相依的樹狀結構，確保在將來其他開發者執行 npm install 時，可以安裝到完全相同的套件版本。

### 6. **更新 node_modules**：
所有安裝的相依套件會被放入 node_modules 資料夾中，並且在 package.json 中的相依性資訊會與 package-lock.json 一致。

<br></br>
---
參考資源：  
- [Node.js、npm 套件管理工具，基礎設定](https://medium.com/susan-blog/webpack-4-%E7%AD%86%E8%A8%98-%E5%9F%BA%E7%A4%8E%E8%A8%AD%E5%AE%9A-f98f62ee9aba)
- [關於前端大管家 package-json，你知道多少？](https://www.readfog.com/a/1672444523038478336)