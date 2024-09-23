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
    "name": "my-app",
    "version": "1.0.0",
    "description": "A simple Node.js application",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "jest"
    },
    "dependencies": {
        "express": "^4.17.3",
        "mongoose": "^5.11.15"
    },
    "devDependencies": {
        "jest": "^27.0.6",
        "eslint": "^7.32.0"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/user/repo.git"
    },
    "keywords": ["node", "express", "web"],
    "author": "Your Name",
    "license": "MIT"
    }
    ```

