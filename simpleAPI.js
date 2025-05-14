// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Simulando banco de dados
const words = [
  {
    word: "Bonjour",
    language: "French",
    translation: "Bom dia",
    context: "Saudação matinal",
    example: "Bonjour, comment ça va ?",
    response: "Très bien, merci !"
  },
  {
    word: "Ciao",
    language: "Italian",
    translation: "Oi / Tchau",
    context: "Saudação informal",
    example: "Ciao! Come stai?",
    response: "Sto bene, grazie!"
  },
  {
    word: "こんにちは",
    language: "Japanese",
    translation: "Olá / Boa tarde",
    context: "Saudação diurna",
    example: "こんにちは、お元気ですか？",
    response: "はい、元気です！"
  },
  {
    word: "Hello",
    language: "English",
    translation: "Olá",
    context: "Saudação comum",
    example: "Hello, how are you?",
    response: "I'm good, how about you?"
  }
];

// Endpoint: retorna uma palavra aleatória por idioma
app.get('/api/word/:language', (req, res) => {
  const lang = req.params.language.toLowerCase();
  const filtered = words.filter(w => w.language.toLowerCase() === lang);

  if (filtered.length === 0) {
    return res.status(404).json({ error: "Language not supported or no data available" });
  }

  const randomWord = filtered[Math.floor(Math.random() * filtered.length)];
  res.json(randomWord);
});

app.listen(PORT, () => {
  console.log(`📘 Word API running on http://localhost:${PORT}`);
});
