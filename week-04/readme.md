### 1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中
- public IP: 3.27.217.249
```
http://3.27.217.249/
```

### 2. 什麼是 instance type?
- Instance type 在 AWS EC2 中用於定義虛擬伺服器的計算能力、記憶體和存儲空間的配置選項。
- 不同的 instance type 適合不同的應用需求，例如 CPU 效能、記憶體大小和網路頻寬等。
- t2.micro 則是一種輕量級的選擇，通常適用於開發和小型應用。

### 3. 什麼是 Nginx？有哪些用途與特性？
- Nginx 是一個高效能的 HTTP 和反向代理伺服器，常用於網頁伺服器、負載平衡器和 HTTP 緩存。
- 特性：
    - 高效能：能處理大量的並發連接，適合高流量的網站。
    - 反向代理：可以將請求轉發到內部伺服器，實現負載平衡和安全性。
    - 靜態內容伺服器：有效地提供靜態檔案（如圖片、CSS 和 JavaScript）。
    - 安全性：支持 SSL/TLS，加強網站的安全性。

### 4. pm2 套件是什麼？有什麼用處？
- PM2 是一個 Node.js 的 process 管理器，主要用於管理和保持 Node.js 應用的運行。
- 用處：
    - 自動重啟：當應用崩潰時自動重啟。
    - 日誌管理：自動記錄應用的輸出和錯誤日誌。
    - 負載平衡：在多核心系統上運行多個 instance。
    - 簡化部署：簡化應用的部署和管理。

### 5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
- proxy 是一種代理伺服器，扮演中間人的角色，可以在 client 和 sever 之間轉發 request 和 respones，而步驟 9 中提到的 `proxy` 屬於 Reverse proxy。
- 反向代理（Reverse proxy）在電腦網路中是代理伺服器的一種。伺服器根據客戶端的請求，從其關聯的一組或多組後端伺服器（如Web伺服器）上取得資源，然後再將這些資源返回給客戶端，客戶端只會得知反向代理的IP位址，而不知道在代理伺服器後面的伺服器叢集的存在。
- 例如：當客戶端（如瀏覽器）發送請求時，這些請求會被代理伺服器接收，然後由代理伺服器轉發到最終的目標伺服器（如你的 Express Web Server），代理伺服器也會接收目標伺服器的響應，然後將這些響應返回給客戶端。


### 6. 在 readme 中提供步驟 9 的 Nginx 設定檔
```bash
server {
    listen 80;
    server_name 3.27.217.249;

    location / {
        proxy_pass http://localhost:3000;  # 將請求轉發到 Express 應用
        proxy_http_version 1.1; # 使用 HTTP/1.1 協議
    }
}
```
### 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
Security Group(SG) 是 EC2 外面一層的流量防火牆，可以透過設定 SG 規則來限制流入到Instance 的流量(Inbound Traffic/Ingress)以及從 Instance 的流出的流量 (Outbound Traffic/Engress)。

### ### 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
- sudo 是一個 Linux 命令，允許用戶以其他用戶（通常是 root 用戶）的身份執行命令。
- 當需要執行需要高權限的操作時（如安裝軟體或修改系統設置），你需要使用 sudo。
- 不需要加上 sudo 是因為該操作對當前用戶有足夠的權限。

### 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
- Nginx 的日誌文件位於 `/var/log/nginx/` 目錄下，該目錄下通常會有兩個主要的日誌文件：
    - access.log：記錄所有訪問 Nginx 的請求，包括請求的時間、請求方法、請求的 URL、用戶的 IP 地址、響應狀態碼等。
    - error.log：記錄 Nginx 運行過程中出現的錯誤和警告。
- 上網搜尋是否有默認路徑，再到目錄確認：
    - 在大多數 Linux 系統中，Nginx 的日誌文件默認位置為 `/var/log/nginx/access.log `和 `/var/log/nginx/error.log`。
- 可以使用 cat 或 tail 指令：
    ```bash
    cat /var/log/nginx/access.log
    tail -n 100 /var/log/nginx/access.log  # 查看最後 100 行
    tail -f /var/log/nginx/access.log
    ```


### 10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
無

### 11. 列出完成本作業時參考的資料
- https://blog.csdn.net/weixin_45331895/article/details/120479640
- https://aws.amazon.com/tw/ec2/instance-types/
- https://www.explainthis.io/zh-hant/swe/why-nginx
- https://zh.wikipedia.org/zh-tw/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86
- https://www.casper.tw/development/2023/10/03/unbuntu-and-pm2/
- https://www.ithome.com.tw/news/5006
- https://ithelp.ithome.com.tw/articles/10264200
- https://help.ubuntu.com/kubuntu/desktopguide/zh_TW/root-and-sudo.html
- https://blog.csdn.net/qq_35393472/article/details/136719093
