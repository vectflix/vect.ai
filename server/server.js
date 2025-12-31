import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`
      Return ONLY the HTML/Tailwind CSS code for: ${prompt}. 
      No conversational text, no backticks, no markdown. 
      Ensure high-end design.
    `);
    const response = await result.response;
    res.json({ code: response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Engine Error" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on ${PORT}`));
