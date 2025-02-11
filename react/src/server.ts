import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// ミドルウェアの設定
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build/client")));

// APIルートの設定
app.get("/api/test", (req, res) => {
  res.json({ message: "APIテスト成功" });
});

// その他のルートはReactアプリにリダイレクト
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/client/index.html"));
});

app.listen(port, () => {
  console.log(`サーバーが起動しました: http://localhost:${port}`);
});
