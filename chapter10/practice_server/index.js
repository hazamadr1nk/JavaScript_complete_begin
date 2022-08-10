// 設定
const dirImages = "upload_images/"; // 投稿画像を保存するフォルダ
const filePostDat = "post-dat.txt"; // 投稿コメントを保存するファイル

// モジュールの読み込み
const fs = require("fs");
const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({dest: dirImages})

// ルート
app.get("/", (req,res) =>{
    res.send("Hello World");
});

// 静的ページの表示
app.use("/app", express.static(__dirname + "/../app"));
app.use("/upload_images", express.static(__dirname + "/upload_images"));

//浪校の受付

