require('dotenv').config();  // 引入 dotenv 套件

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;   // 使用環境變數 PORT，如果未設置則默認為 3000

// 定義 '\' route   
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// 啟動伺服器   // http://localhost:3000/
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})