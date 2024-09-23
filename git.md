## 說明 `blob`, `tree`, `commit`, `branch`, `head` 分別是什麼

### 1. Blob（Binary Large Object）
> - Blob 是 Git 中的基本資料單位，儲存文件的內容。將文件添加到 Git 中時，Git 會為文件創建一個 Blob，它只存儲文件的二進制資料，不包含文件名或目錄結構等訊息。使得 Git 能夠高效地處理相同內容的文件，即便它們在不同目錄下出現多次，也只存儲一次資料。
> - Blob 是基於文件內容的 SHA-1 哈希生成的，因此同一文件內容在不同版本中會重複使用相同的 blob​。
> - Blob 通常透過 git add 命令創建，將文件加入暫存區時，Git 會對該文件進行 hash 處理並生成 blob，然後將其壓縮後儲存在 `.git/objects/` 中。

### 2. Tree
> - Tree 是 Git 中用來表示文件夾或目錄的 object，它包含指向多個 blob 和其他 tree 的指針。每個 Tree 包含目錄中的文件和子目錄的索引，記錄文件的名稱、權限以及它們對應的 blob（文件）或 tree（子目錄）指針。
> - 在每次 commit 時，Git 都會創建一個新的 tree object，代表當前項目的目錄結構。
> - Tree 的結構非常類似於作業系統的目錄結構，允許儲存任意深度的嵌套目錄。每個 Tree 都會通過指針鏈接到它包含的 blob 和其他 tree，形成層次化的資料結構。
![data-model-1](/Material/data-model-1.png)
圖片來源：<https://git-scm.com/book/en/v2/Git-Internals-Git-Objects>
![data-model-2](/Material/data-model-2.png)
圖片來源：<https://git-scm.com/book/en/v2/Git-Internals-Git-Objects>

### 3. Commit
> - Commit 是 Git 中的核心資料結構之一，用來記錄每次提交的快照。每次提交都保存了一個指向當前文件目錄（Tree）的指針，以及提交訊息（如提交者、提交時間、提交描述等）。Commit 還包含對應的父 commit，從而形成一條提交歷史鏈條。
> - 每次提交後，Git 會記錄當時所有文件的狀態，而不只是修改的部分。雖然每個提交都可以指向多個父提交（例如在合併時），但每次普通提交通常只會指向一個父提交。
> - commit 的指針結構確保了 Git 的歷史是不可變的，所有修改都可以被追溯。
![data-model-3](/Material/data-model-3.png)
圖片來源：<https://git-scm.com/book/en/v2/Git-Internals-Git-Objects>

### 4. Branch
> - Branch 是一個 Git 中的指針，它指向一個特定的 commit。每個分支都是一條提交歷史的線路，允許在多條開發線路上進行工作。分支只是對某個提交的引用，在一個分支上進行新的提交時，這個分支指針會自動前移到最新的提交。
> - Git 的分支操作非常輕量，每個分支只是一個對應 commit 的指針，因此創建和切換分支的操作非常迅速。
> - 分支允許並行開發，常見的操作如 git checkout（切換分支）和 git merge（合併分支）依賴於這些分支的結構。

### 5. HEAD
> - HEAD 是 Git 中的一個特殊指針，代表當前檢出的 commit 或分支。通常，HEAD 指向當前的分支，當你提交代碼時，HEAD 會隨著分支一起移動到新的 commit。
> - 如果切換到某個具體的 commit（而不是分支），HEAD 就會處於“分離狀態”（detached HEAD）。在這種情況下，變更不會影響任何分支，除非將它們明確合併回某個分支中。



---
<br></br>
## 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

### 1. git init
- 在一個目錄中執行 git init 時，會創建一個 `.git` 目錄。
- `.git` 目錄的結構：  
    ![init](/Material/init.PNG)  

    `HEAD`：指向當前所處的分支（預設為 refs/heads/main 或 refs/heads/master）。
    `config`：Git 的配置檔案，包含倉庫級別的配置。  
    `description`：通常用於描述裸倉庫，在非裸倉庫中沒有實際作用。  
    `hooks/`：存放 Git 鉤子腳本的資料夾（如 pre-commit 鉤子），預設這些鉤子是範本文件。  
    `info/`：包含不被忽略文件的全域性 exclude 文件。  
    `objects/`：存儲 Git 物件（如提交、樹和塊物件），這些物件以 SHA-1 雜湊值命名。  
    `refs/`：存放指向提交物件的引用，例如分支和標籤。

### 2. git add
- `.git/index` 文件更新。  
    ![add](/Material/add.PNG)  
    ![add_index](/Material/add_index_content.PNG)  
    `.git/index` 是 Git 的「暫存區」索引檔案，它記錄了被追蹤的文件狀態。每次執行 git add，該文件會被更新，新增或修改的文件資訊會被寫入。

-  `.git/objects/`更新  
    -   (第一次) add 前：![init_object](/Material/init_objects.PNG)   
    -   (第一次) add 後：![add_object](/Material/add_objects.PNG)  
    -   執行 git add 命令時，Git 會將這些文件轉換成 blob object，並將它們存放在 `.git/objects/` 目錄中。會看到該目錄中新增了一些以 SHA-1 哈希值命名的文件。 

### 3. git commit
- 當執行 git commit 時，Git 會創建一個新的 commit object，並將它存放在 `.git/objects/` 中。  
    -   commit 前：![add_object](/Material/add_objects.PNG)   
    -   commit 後：![commit_object](/Material/commit_objects.PNG) 
    -   `.git/objects/` 目錄中會生成新的提交物件（commit object）、樹物件（tree object）和塊物件（blob object）。每個物件文件名是基於其內容計算的 SHA-1 雜湊值，並被分成兩層目錄存放，例如 `objects/ab/cdef123456...`。   
    -   *註：這個 object 包含指向當前 tree object（目錄結構）的指針，以及指向父提交的指針。*
- `.git/refs/heads/` 目錄中會更新當前分支（如 main 或 master），其指針指向新生成的提交物件的雜湊值。
- `logs/HEAD` 和 `logs/refs/heads/` 會更新，記錄當前分支的歷史操作。

### 4. git branch
- 創建一個新的分支時，Git 會在 `.git/refs/heads/` 目錄下新增一個文件，這個文件的內容是新分支所指向的提交的哈希值。  
- 例如：    
![branch](/Material/branch_new.PNG) 

      執行 git branch test 之後，會在 `.git/refs/heads/` 目錄中看到一個名為 test 的文件，該文件記錄了新分支的提交 hash。(目前有 master 與 test)  

### 5. git merge
- 執行合併操作後，.git/objects/ 和 .git/refs/heads/ 會更新：
    - `.git/objects/` 中會生成一個新的合併提交物件，它記錄合併後的狀態，包含兩個父提交的雜湊值。
    - `.git/refs/heads/` 中的分支檔案（如 master）會更新，指向合併後的最新提交物件。

![data-model-4](/Material/data-model-4.png)
圖片來源：<https://git-scm.com/book/en/v2/Git-Internals-Git-References>

### 6. git checkout
- 切換分支後，.git/HEAD 檔案會更新：  
    - `.git/HEAD` 檔案會指向當前所在的分支。例如，從 master 切換到 test，HEAD 檔案的內容將從 `ref: refs/heads/master` 改為 `ref: refs/heads/test`。  
    - 如果使用了分離 HEAD 狀態 (git checkout <commit_hash>)，HEAD 檔案會直接指向一個提交雜湊值，而不是分支名稱。

### 7. git reset
- 重置操作根據不同的模式（如 --soft、--mixed、--hard）對 .git 資料夾有不同的影響：  
    - git reset --soft：僅更新 `.git/HEAD` 檔案，指向目標提交的雜湊值。  
    - git reset --mixed：更新 `.git/HEAD` 和 `.git/index` 檔案，暫存區會重置為目標提交的文件狀態。  
    - git reset --hard：更新 `.git/HEAD` 和 `.git/index` 檔案，同時工作目錄中的文件也會恢復到目標提交的狀態。

### 8. git pull
- `.git/refs/remotes/` 目錄下的檔案（如 `origin/main`）會更新，指向從遠端倉庫獲取的最新提交物件的雜湊值。  
- 如果有新的提交物件，`.git/objects/` 資料夾中會存儲這些新物件（包括提交、樹和物件）。  
- `.git/refs/heads/` 中的本地分支引用檔案會更新為合併後的最新 commit。

### 9. git branch -d
- 刪除分支後，在 `.git/refs/heads/` 資料夾下，對應的分支檔案（如 test）會被刪除。

---
<br></br>
## commit message 應該怎麼寫比較好？應該有什麼 `style` 嗎？

### 1. 標題格式
- 使用簡潔的祈使句：標題應直接描述此次提交的內容，並以動詞開頭，例如「新增」、「修正」、「移除」等。這樣可以讓其他開發者快速了解這次提交的主要變動內容。
- 長度限制：標題應盡量保持在 50 個字符以內，避免過於冗長。
    - 範例：        
        *       feat: 新增使用者註冊功能       
        *       fix: 修正用戶登入時的記憶體洩漏問題

### 2. 標題類型
- 使用 Conventional Commits 格式來區分不同類型的提交，這樣可以明確表達提交的意圖，並能自動生成變更日誌。常見的標題類型包括：  
    - feat: 新功能
    - fix: 修復 bug
    - docs: 修改文件
    - style: 代碼風格修改（不影響功能）
    - refactor: 代碼重構（不影響功能和行為）
    - test: 添加測試
    - chore: 例行工作、配置修改（不影響代碼）

### 3. 主體內容
- 空行分隔：標題和主體之間應有一個空行，讓結構清晰可讀。
- 詳細描述變更原因：主體部分應詳細解釋為什麼進行這次變更，提供背景信息或具體情境。這有助於未來開發者了解這次提交的目的。
- 如何測試：特別是在修復 bug 或新增功能時，說明測試方式（如自動化測試或手動測試）可以幫助後續的維護和驗證。
- 範例：  

        增加了 OAuth 2.0 認證功能，增強了系統的安全性。

        測試方式：
        1. 單元測試覆蓋了 Token 生成和驗證。
        2. 手動測試了 Token 過期和無效情況。

### 4. 關聯問題追蹤
- 當提交與某個 issue 或 feature request 有關時，應在提交訊息中包含相關的 issue 編號或連結，方便追蹤。範例：
    -       fix: 修正用戶資料同步錯誤 (close #123)
    -       feat: 增加報告生成功能 (resolve #456)

### 5. Breaking Changes
- 若這次提交包含破壞性變更（例如 API 的重大修改），應在類型後加上「**!**」，並在主體部分詳細說明這次變更對使用者的影響，以及如何應對。
- 範例：

    -       feat!: 修改 API 調用參數，可能導致現有應用程序無法正常運行
    -       主體描述破壞性變更的詳細信息，並說明如何更新現有應用。
### 6. Commit Message 範例
- fix: 修復登入系統中的記憶體洩漏問題

        解決了因登入時 Token 無效導致的記憶體洩漏。

        測試：
        - 使用單元測試模擬無效 Token 狀況，確認問題已解決。
        - 手動測試多次登出登錄流程，系統運行正常。
- feat: 新增報表生成功能

        增加了 PDF 報表生成功能，用於導出每月銷售數據。

        測試：
        - 單元測試覆蓋了數據導出功能。
        - 手動測試了不同時間範圍的報表生成。


---

參考資源：  
- [深入 Git：Git 物件儲存 - blob 物件](https://titangene.github.io/article/git--blob-object.html)  
- [Learn-Git-in-30-days](https://github.com/doggy8088/Learn-Git-in-30-days)
- [Git Internals - Git Objects](https://git-scm.com/book/en/v2)  
- [Git Commit Message 這樣寫會更好，替專案引入規範與範例](https://ithelp.ithome.com.tw/articles/10228738)
- [Git Commit Message 格式與規範整理](https://hackmd.io/@dh46tw/S1NPMsy5L)