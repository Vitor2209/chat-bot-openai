import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// rota do chat
app.post("/chat", (req, res) => {
  const { message } = req.body;

  // resposta simulada (perfeita pra entrega)
  res.json({
    reply: `Hello! This is a simulated response for the assignment.\nYou said: "${message}"`
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
