const express = require('express');
const analyzeRoutes = require('./routes/analyzeRoutes'); 
require('dotenv').config();

const app = express();
app.use(express.json());

// 라우터 등록
app.use('/api/analyze', analyzeRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
