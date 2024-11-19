##  AWS CloudWatch Metrics - CPUUtilization 的截圖
![](/weel-10/metrics.PNG)

##  AWS CloudWatch Alarm 圖表的截圖
![](/weel-10/alarm-graph.PNG)

##  收到通知的截圖
![](/weel-10/alarm-email.PNG)

##  Lambda function 程式
```js
import https from 'https';

export const handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2)); // 日誌完整事件

    const webhookUrl = "https://discord.com/api/webhooks/1307754007678160936/KqpY5bvrWyXXputRK30Bolr8vf0Slhq80AH-90LL9hqs03jWHD4EFXckmauLp81-Fco0";

    let alarmDetails = "⚠️ 測試通知：CloudWatch Alarm 被觸發！";

    try {
        // 從事件中提取 SNS 消息
        const snsMessage = event.Records[0].Sns.Message;
        console.log("SNS Message:", snsMessage);

        const parsedMessage = JSON.parse(snsMessage); // 確保消息為 JSON 格式

        // 提取警報詳細信息
        const alarmName = parsedMessage.AlarmName || "Unknown Alarm";
        const stateReason = parsedMessage.NewStateReason || "No reason provided";
        const stateValue = parsedMessage.NewStateValue || "No state value";

        // 建立要發送的通知訊息
        alarmDetails = `⚠️ **警報觸發！**\n**名稱**: ${alarmName}\n**狀態**: ${stateValue}\n**原因**: ${stateReason}`;
    } catch (err) {
        console.error("Error parsing SNS message:", err);
        alarmDetails = "⚠️ 錯誤：無法解析 CloudWatch Alarm 詳細信息！";
    }

    const message = {
        content: alarmDetails,
    };

    const data = JSON.stringify(message);
    const { hostname, pathname: path } = new URL(webhookUrl);

    const options = {
        hostname: hostname,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let response = '';
            res.on('data', (chunk) => {
                response += chunk;
            });

            res.on('end', () => {
                console.log(`Response from Discord: ${res.statusCode} - ${response}`);
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve({
                        statusCode: res.statusCode,
                        body: `Message sent successfully: ${response}`,
                    });
                } else {
                    reject({
                        statusCode: res.statusCode,
                        body: `Failed to send message: ${response}`,
                    });
                }
            });
        });

        req.on('error', (e) => {
            console.error(`Request error: ${e.message}`);
            reject({
                statusCode: 500,
                body: `Error sending message: ${e.message}`,
            });
        });

        req.write(data);
        req.end();
    });
};

```

##  Discord 接收到訊息的截圖
![](/weel-10/lambda-discord.PNG)

##  AWS CloudWatch Logs 擷取 Lambda Function 執行 log 的截圖
![](/weel-10/lambda-logs.PNG)