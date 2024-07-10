const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静的ファイルの設定
app.use(express.static(path.join(__dirname, 'public')));

// ルート設定
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/start', (req, res) => {
    res.render('start', { googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY });
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// サーバーを起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
