import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();

// PEAK CORS: Allows your GitHub site to communicate with Render
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.AIzaSyAU_Q4CfGUdWHFU7fuLwXiCB1aAfh2bi3E);

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const peakPrompt = `
      You are the VECT.AI Engine. 
      Create a professional, modern web component for: ${prompt}. 
      Return ONLY the HTML and Tailwind CSS code. 
      Do not include explanations or markdown formatting.
    `;

    const result = await model.generateContent(peakPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ code: text });
  } catch (error) {
    console.error("PEAK_ENGINE_ERROR:", error);
    res.status(500).json({ error: "AI Engine is currently overloaded." });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Peak Server running on port ${PORT}`);
});
