### 1. 你的網址，應該是 https://www.xxx.xxx，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）
- https://mrceng.org/
- https://www.mrceng.org/

### 2. 你在哪裡購買網域的
- Namecheap

### 3. DNS 的 A record 是什麼？
A record（Address Record）是 DNS 中的一種紀錄類型，用於將網域名稱映射到對應的 IPv4 地址。當用戶在瀏覽器中輸入某個網域名稱時，DNS 伺服器會查找這個 A record，以找到相應的 IP 位址，進而連接到正確的伺服器。

### 4. DNS 的 NS record 是什麼？
- NS record（Name Server Record）也是 DNS 中的一種紀錄類型，指定了某個網域應該使用哪些 name server 解析該網域的其他 DNS 記錄 (NS record決定了哪台 name server 負責處理該網域的 DNS 查詢)。

### 5. Domain Name vs FQDN vs URL 這三者分別為何？
#### Domain Name：
- 一個網站的名稱，可以指向到 IP 位址，方便用戶訪問網站。
- 例如：abc.com

#### FQDN（Fully Qualified Domain Name）：
- 一種完整的網域名稱，包含主機名和網域名，能夠唯一辨識。
- 例如：www.abc.com
#### URL（Uniform Resource Locator）：
完整的網路地址，包含協定（如 HTTP/HTTPS）、網域名稱或 IP 地址、路徑、以及參數等資訊。
- 例如：https://newdoc.nccu.edu.tw/teaschm/1131/schmPrv.jsp-yy=113&smt=1&num=703816&gop=00&s=1.html

### 6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
- 可以加密資料傳輸、驗證網站身份，提升安全性和用戶信任，防止資料被竊取或篡改。
- 使用 HTTP，資料未加密、容易被竊聽或篡改，且用戶瀏覽器會顯示不安全警告，降低信任度，而 HTTPS 提供加密與驗證，可確保安全。

<br></br>

---
### 參考資源
- [什麼是 DNS](https://aws.amazon.com/tw/route53/what-is-dns/)
- [搞懂 IP、FQDN、DNS、Name Server│鼠年全馬鐵人挑戰 #05](https://its-okay.medium.com/%E6%90%9E%E6%87%82-ip-fqdn-dns-name-server-%E9%BC%A0%E5%B9%B4%E5%85%A8%E9%A6%AC%E9%90%B5%E4%BA%BA%E6%8C%91%E6%88%B0-05-aa60f45496fb)



