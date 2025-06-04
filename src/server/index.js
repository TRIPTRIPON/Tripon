
require('dotenv').config(); // 항상 최상단
const express = require('express');
const cors = require('cors');
const analyzeRoutes = require('./routes/analyzeRoutes');

const app = express();
app.use(cors());              // CORS 허용 (프론트랑 포트 다를 때 필수)
app.use(express.json());

app.use('/api/analyze', analyzeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});

