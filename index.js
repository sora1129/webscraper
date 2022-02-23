// ポートの宣言(数値は好みor必要に応じて変更)
const PORT = 8000;

// 各モジュールのインポート
const express = require("express");
const axios = require("axios");
const cheerio = recquire("cheerio");

const app = express();

//ウェブスクレイパーを作ろう！
const URL = "https://books.rakuten.co.jp/search?sitem=javascript&g=000&l-id=pc-search-box";

//ポートを使ってサーバーを起動する
app.listen(PORT, console.log("surver running!"))