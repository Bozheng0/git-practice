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

