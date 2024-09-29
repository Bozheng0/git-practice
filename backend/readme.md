# package.json 中的 dependencies 與 devDependencies 分別是什麼

### **dependencies**
- 用途：dependencies 中列出的套件是專案在「生產環境」中必須運行的。
- 範例：  
如果需要 Express 框架來處理 HTTP 請求，Express 就會列在 dependencies 中。
- 執行 `npm install` 時，就會被安裝。(後面不加參數時，會默認安裝 dependencies 中列出的所有項目)

```json
{
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.21"
  }
}
```

### **devDependencies**
- 用途：devDependencies 中列出的套件是專案在「開發環境」中需要的的工具。這些工具主要用於開發過程中，例如編譯、測試、打包，但不會在應用程式最終運行時使用。
- 範例：  
測試框架（如 mocha）、打包工具（如 webpack）或者編譯工具（如 babel），這些套件通常只在開發和測試過程中使用。
- 準備將應用程式部署到生產環境時，執行 `npm install --production` ，以下的並不會被安裝，因為它們只有在開發環境時才需要。

```json
{
  "devDependencies": {
    "mocha": "^8.4.0",
    "webpack": "^5.36.2"
  }
}
```
- 如果想安裝測試框架（如 mocha），可以使用以下命令：  
`npm install mocha --save-dev`

<br></br>


# package.json 中的 scripts 這個區塊怎麼用？

在 package.json 中，scripts 區塊用來定義一組可執行的命令，這些命令通常用於簡化開發流程、構建過程、測試等任務，可以通過 `npm run <script_name>` 或 `yarn <script_name>` 來執行。

### 常見的 scripts 使用範例：
```json
{
  "scripts": {
    "start": "node app.js",
    "test": "jest",
    "build": "webpack --mode production",
    "dev": "nodemon app.js",
    "clean": "rm -rf dist"
  }
}
```
- start：啟動應用程式，通常用於生產環境的運行。執行 npm start 或 yarn start。
- test：執行測試。執行 npm test 或 yarn test。這裡使用的是 jest 測試框架。
- build：構建應用程式，這裡用的是 webpack 進行生產模式的打包。
- dev：啟動開發模式，使用 nodemon 來自動重啟伺服器。

### 使用方式：
```bash
npm start          (默認為 npm run start)
npm test           (默認為 npm run test)
npm run clean      (自定義)
```

<br></br>

# Port number 要怎麼以環境變數來設定？

### 1. 使用 `.env` 
為了方便管理環境變數，可以使用 `.env` 文件和 `dotenv` 套件來載入環境變數。  
步驟：  
1. 安裝 dotenv：
    ```bash
    npm install dotenv
    ```
2. 建立 `.env` 文件，並添加 port 設定：
    ```.env
    PORT=3000
    ```
3. 在應用程式中載入 `.env` 文件：
    ```javascript
    require('dotenv').config();

    const express = require('express');
    const app = express();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
    ```

### 2. 在應用程式中讀取環境變數
在 Node.js 中，可以使用 process.env 來讀取環境變數。
```javascript
const express = require('express');
const app = express();

// 讀取環境變數，如果未設定則使用預設值 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
- `process.env` 是 Node.js 中的一個全局變數，用於訪問環境變數。這些環境變數通常用於配置應用程式，可以根據不同的環境（例如開發、測試和生產環境）進行不同的設置。


<br></br>

# 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

### 1. 應上傳的檔案
- 原始碼檔案：原始碼是專案的核心，包含應用程式的邏輯和功能。上傳原始碼可以讓其他開發者參與貢獻、報告問題或進行審查。
- package.json 和 package-lock.json（對於 Node.js 專案）：這些檔案定義了專案的依賴、版本資訊和執行指令，讓其他開發者能夠輕鬆安裝所需的套件和運行專案。
- README.md：這個檔案通常提供專案的介紹、安裝指導、使用範例和貢獻指南，有助於新使用者快速了解專案。
- 測試檔案：測試檔案對於維持程式碼品質和穩定性非常重要。上傳這些檔案可以幫助其他開發者理解如何測試專案及其功能。

### 2. 不上傳的檔案
- 敏感資料（如 API 密鑰、資料庫密碼）：這些資訊可能導致安全漏洞，應該通過環境變數或配置檔來管理，而不是直接在版本控制中上傳。
- node_modules 資料夾：這個資料夾包含所有安裝的 dependence，通常體積龐大，並且可以通過 npm install 重新生成。上傳它不僅會浪費空間，也會增加版本管理的複雜性。
- 編譯產物或中間檔案（如 dist 或 build 資料夾）：這些檔案是由原始碼生成的，可以通過構建過程重新生成，無需在版本控制中保存。
- 本地配置檔（如 .env、.local 配置檔）：這些檔案通常包含本地環境特定的設定，不適合在共享的倉庫中公開。應該提供範本（如 .env.example），讓使用者根據需要自行創建。
- 常見清單：

        機敏性資料：資料庫帳號密碼、存取權限的權杖(token)、憑證(credentials)...
        環境變數：專案env檔(因為裡面通常存有ip、password...等隱私資訊)
        套件資料夾：node_module、vendor...
        日誌檔案：log相關紀錄
        程式編譯時產生的檔案：快取檔案、暫存檔案、編譯結果

### 決策要素
- 專案的性質：開源專案通常會上傳更多的文檔和指導，而私有專案可能會根據安全性需求決定不上傳某些敏感資訊。
- 團隊協作：如果專案有多個開發者，則需要考慮如何讓其他人能夠輕鬆地協作、使用和貢獻專案。
- 維護和更新：上傳的檔案應該易於維護，且不會造成不必要的版本管理困難。
最佳實踐：遵循社群和開發領域的最佳實踐，能夠提高專案的可用性和安全性。


<br></br>

# 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？







參考資源：  
- [深入理解devDependencies和dependencies：在Node.js项目中的角色与差异](https://cloud.baidu.com/article/2948793)
- [dependencies v.s devDependencies](https://medium.com/itsems-frontend/nodejs-npm-dependencies-devdependencies-8934f641c8ef)
- [How do you prevent install of "devDependencies" NPM modules for Node.js (package.json)?](https://stackoverflow.com/questions/9268259/how-do-you-prevent-install-of-devdependencies-npm-modules-for-node-js-package)
- [JavaScript：認識 Module & NPM 套件庫](https://hackmd.io/@Heidi-Liu/note-js102-npm)
- [怎麼修改nodejs連接埠號](https://www.php.cn/zh-tw/faq/522104.html#google_vignette)
- [設定joi與config dotenv環境參數](https://ithelp.ithome.com.tw/articles/10195267)
- [gitignore - 杜絕上傳錯誤資料，從此不再發生慘痛經驗](https://ithelp.ithome.com.tw/m/articles/10241730)
