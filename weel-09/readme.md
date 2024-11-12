## troubleshooting lab 除錯過程

### 1. port 遭到占用
使用 curl 檢查 localhost，並嘗試啟動 Nginx 伺服器
- curl localhost
![](/asset/curl%20localhost01.png)
- sudo systemctl start nginx
![](/asset/startnginx01.png)

因啟動產生錯誤，檢查 nginx.service 的狀態
- sudo systemctl status nginx.service
![](/asset/nginx.service01.png)

查看 port 的 process
- sudo lsof -i :80
![](/asset/lsof.png)

利用指令將該行程終止
- sudo kill 574


### 2. 配置文件的語法錯誤
嘗試啟動 Nginx 伺服器，因此
- sudo systemctl start nginx
![](/asset/startnginx01.png)

檢查 nginx 的語法，錯誤訊息顯示第八行有語法上的錯誤
- sudo nginx -t 
![](/asset/error.PNG)

檢查 nginx.conf 檔，並 debug
- sudo nano /etc/nginx/nginx.conf

![](/asset/nginx.conf.png)

### 3. 權限更改
測試伺服器回應
- curl localhost 
![](/asset/success.png)

再次測試 Nginx 配置文件
- nginx -t 
![](/asset/-t.png)

錯誤訊息顯示權限被拒絕，因此檢查 Nginx 的網站配置文件
- sudo nano /etc/nginx/sites-available/default 
![](/asset/default.png)

檢查權限
- ls -ld /var/myweb
![](/asset/myweb.png)

更改檔案的權限設置
- sudo chown -R www-data:www-data /var/myweb


### 4. 檢查防火牆
重新啟動伺服器並測試伺服器回應
- curl localhost
- sudo systemctl restart nginx
![](/asset/5.PNG)

檢查防火牆
- sudo iptables -L 
![](/asset/iptables.png)

刪除防火牆中的第一條規則
- sudo iptables -D INPUT 1

### 5. 除錯完成
- curl localhost
![](/asset/succ.png)


## 心得

在這次的 troubleshooting lab 中，可以體會到伺服器管理與除錯的重要性，也學到了許多實用的操作技巧。

1. 一開始，遇到了 Nginx 無法啟動的情況。透過 curl localhost 來測試伺服器回應後，發現 port 已經被其他行程佔用。這時使用 lsof -i :80 指令查看佔用 port 的行程，然後用 kill 指令終止該行程。

    - 過程中讓我體會到，系統資源的管理是確保伺服器順利啟動的基礎。

2. 接著，發現 Nginx 配置文件中的語法錯誤，使用 nginx -t 指令檢查配置文件後，錯誤訊息指出第八行存在語法問題。

    - 常見的語法錯誤如何影響伺服器的啟動。

3. 第三個問題是權限設定的錯誤。當我嘗試啟動 Nginx 時，權限被拒絕的錯誤提示我檢查網站目錄的訪問權限，透過 ls -ld 檢查目錄權限，發現需要將目錄的擁有者設為 www-data 用戶。
    
    - 理解權限管理對伺服器的穩定運行很重要，尤其是在多用戶的伺服器環境中，正確的權限設定能有效防止安全問題的發生。

4. 最後，在排查防火牆設置時，能了解到防火牆的規則會影響到伺服器的對外連接。當我使用 iptables 查看並清除無用的規則後，伺服器順利恢復了正常連線。

    - 顯示防火牆在伺服器安全管理中的作用。

在這次的 troubleshooting lab 中，我學會了如何根據錯誤訊息逐步排查問題，並解決系統故障，除了加深了我對各種工具和指令的理解，也提升了我的問題解決能力。
感謝老師能提供學習環境，透過實際操作中增強技術能力，讓我們有機會體驗系統出錯時，該如何處理?
也提點了未來遇到系統故障時可能問題點，但我想最重要的還是培養解決問題的思維，而非僅僅記住知識點。