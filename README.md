
## 🚀 프로젝트 소개

Trip:On은 사용자가 여행 사진을 업로드하면 AI가 사진 속 장소를 예측하고, 그 경험을 바탕으로 나만의 여행 캐릭터를 해석해 제공하는 서비스입니다. 이 MVP 버전은 **React**, **OpenAI API**를 중심으로 빠르게 구현되며, 백·프론트 통합 단일 애플리케이션으로 Docker 배포됩니다.

---

## ⚙️ 기술 스택

* **프론트엔드**: React (JSX, CRA 또는 Next.js), Tailwind CSS
* **백엔드**: Node.js, Express
* **AI 서비스**: OpenAI API (텍스트 분석), 자체 Vision 모델 (장소 예측)
* **이미지 처리**: Sharp (서버), HTML5 Canvas (클라이언트)
* **데이터베이스**: MongoDB (피드백 및 사용자 데이터 저장)
* **컨테이너**: Docker, docker-compose
* **테스트**: Jest, React Testing Library
* **CI/CD**: GitHub Actions
* **공통**: JavaScript/TypeScript, ESLint, Prettier

---

## 🔄 시퀀스 다이어그램

---

## 📦 파일 구조

```bash
trip-on-mvp/
├── .github/                  # GitHub Actions 워크플로우
│   └── workflows/
│       ├── ci.yml            # CI 워크플로우 (테스트, 린트)
│       └── deploy.yml        # 배포 워크플로우
├── .env.example              # 환경 변수 예시 (.env 사용 가이드)
├── .gitignore                # Git 무시 파일 목록
├── .eslintrc.js              # ESLint 설정
├── .prettierrc               # Prettier 설정
├── Dockerfile                # Docker 설정
├── docker-compose.yml        # 개발용 Docker Compose
├── docker-compose.prod.yml   # 프로덕션용 Docker Compose
├── jest.config.js            # Jest 테스트 설정
├── package.json              # 루트 의존성 & 스크립트
├── README.md                 # 프로젝트 설명 및 가이드
├── src/
│   ├── client/               # React 프론트엔드
│   │   ├── public/           # 정적 에셋
│   │   │   ├── favicon.ico
│   │   │   └── logo.png
│   │   ├── src/
│   │   │   ├── components/   # UI 컴포넌트
│   │   │   │   ├── common/               # 공통 컴포넌트
│   │   │   │   │   ├── Button.jsx        # 공통 버튼
│   │   │   │   │   ├── Modal.jsx         # 공통 모달
│   │   │   │   │   └── Spinner.jsx       # 로딩 스피너
│   │   │   │   ├── layout/               # 레이아웃 컴포넌트  
│   │   │   │   │   ├── Header.jsx        # 상단 네비게이션
│   │   │   │   │   └── Footer.jsx        # 하단 푸터
│   │   │   │   ├── upload/               # 업로드 관련 컴포넌트
│   │   │   │   │   ├── UploadButton.jsx  # 사진 업로드 버튼
│   │   │   │   │   └── ImageCropper.jsx  # 이미지 크롭 기능
│   │   │   │   ├── analysis/             # 분석 관련 컴포넌트
│   │   │   │   │   ├── AnalysisCard.jsx  # 분석 결과 카드
│   │   │   │   │   └── FeedbackForm.jsx  # 피드백 양식
│   │   │   │   └── collage/              # 콜라주 관련 컴포넌트
│   │   │   │       ├── CollageGrid.jsx   # 네컷 콜라주 레이아웃
│   │   │   │       └── ShareButtons.jsx  # 공유 버튼 모음
│   │   │   ├── pages/       # 페이지 컴포넌트
│   │   │   │   ├── Home.jsx               # 온보딩 & 사진 선택
│   │   │   │   ├── Resize.jsx             # 사진 비율/크롭 조정
│   │   │   │   ├── Loading.jsx            # 분석 로딩 화면
│   │   │   │   ├── LocationAnalysis.jsx   # 장소 예측 결과
│   │   │   │   ├── Collage.jsx            # 네컷 콜라주 페이지
│   │   │   │   ├── Feedback.jsx           # 피드백 수집 화면
│   │   │   │   └── Share.jsx              # 결과 공유 페이지
│   │   │   ├── hooks/       # 커스텀 훅
│   │   │   │   ├── useImageUpload.js      # 이미지 업로드 훅
│   │   │   │   └── useAnalysis.js         # 분석 요청 훅
│   │   │   ├── context/     # 컨텍스트 API
│   │   │   │   ├── AuthContext.jsx        # 인증 컨텍스트
│   │   │   │   └── AnalysisContext.jsx    # 분석 결과 컨텍스트
│   │   │   ├── services/    # API 호출 모듈
│   │   │   │   ├── api.js                 # API 클라이언트
│   │   │   │   └── imageService.js        # 이미지 처리 서비스
│   │   │   ├── utils/       # 유틸리티 함수
│   │   │   │   ├── imageUtils.js          # 이미지 처리 유틸
│   │   │   │   └── validationUtils.js     # 유효성 검사 유틸
│   │   │   ├── App.jsx      # React 앱 루트
│   │   │   ├── index.jsx    # React 진입점
│   │   │   └── styles/      # 스타일 관련 파일
│   │   │       ├── index.css
│   │   │       └── tailwind.config.js
│   │   ├── tests/          # 테스트 관련 파일
│   │   │   ├── unit/
│   │   │   │   └── components/
│   │   │   └── integration/
│   │   └── package.json     # 클라이언트 의존성
│   ├── server/              # Node.js 백엔드
│   │   ├── controllers/     # 요청 핸들러
│   │   │   ├── analyzeController.js   # POST /api/analyze 처리
│   │   │   ├── feedbackController.js  # POST /api/feedback 처리
│   │   │   └── shareController.js     # GET /api/share 처리
│   │   ├── routes/          # 라우터 정의
│   │   │   ├── analyzeRoutes.js
│   │   │   ├── feedbackRoutes.js
│   │   │   └── shareRoutes.js
│   │   ├── services/        # 비즈니스 로직
│   │   │   ├── visionService.js      # 장소 예측 호출
│   │   │   ├── openaiService.js      # 캐릭터 분석 호출
│   │   │   ├── dbService.js          # 데이터베이스 서비스
│   │   │   └── imageService.js       # 이미지 처리 서비스
│   │   ├── models/          # 데이터 모델
│   │   │   ├── Analysis.js           # 분석 결과 모델
│   │   │   └── Feedback.js           # 피드백 모델
│   │   ├── utils/           # 유틸 & 미들웨어
│   │   │   ├── logger.js             # 로깅 설정
│   │   │   ├── errorHandler.js       # 에러 핸들러
│   │   │   ├── validation.js         # 입력 유효성 검사
│   │   │   └── security.js           # 보안 관련 유틸
│   │   ├── middleware/      # 미들웨어
│   │   │   ├── multer.js             # 파일 업로드
│   │   │   └── rateLimiter.js        # API 요청 제한
│   │   ├── config/          # 설정 파일
│   │   │   ├── db.js                 # DB 연결 설정 
│   │   │   └── env.js                # 환경 변수 로드
│   │   ├── tests/           # 백엔드 테스트
│   │   │   ├── unit/
│   │   │   └── integration/
│   │   ├── index.js         # Express 앱 진입점
│   │   └── package.json     # 서버 의존성
│   └── shared/              # 공통 리소스
│       ├── types/           # JSDoc/TypeScript 타입 정의
│       │   ├── api.js
│       │   └── shared.js
│       └── utils.js         # 공통 유틸 함수
└── scripts/
    ├── build.sh           # 빌드 스크립트
    ├── deploy.sh          # 배포 스크립트
    ├── db-seed.js         # 초기 데이터 생성
    └── cleanup.sh         # 리소스 정리 스크립트
```

---

## 🚀 시작하기

1. 저장소 클론
    ```bash
    git clone <리포지토리_URL>
    cd trip-on-mvp
    ```

2. 환경 변수 설정
    ```bash
    cp .env.example .env
    # OPENAI_API_KEY, VISION_MODEL_PATH, MONGODB_URI 등 설정
    ```

3. 의존성 설치
    ```bash
    npm install
    ```

4. 개발 서버 실행
    ```bash
    # Docker로 모든 서비스 실행 (추천)
    docker-compose up
    
    # 또는 개별 실행
    # 프론트엔드
    npm run client:dev
    # 백엔드
    npm run server:dev
    ```

5. 테스트 실행
    ```bash
    # 모든 테스트
    npm test
    
    # 프론트엔드 테스트
    npm run client:test
    
    # 백엔드 테스트
    npm run server:test
    ```

6. 배포하기
    ```bash
    # 배포 환경 빌드
    npm run build
    
    # Docker 이미지 생성 및 배포
    ./scripts/deploy.sh
    ```

---

## 💎 코드 품질 관리

### 이슈 생성 규칙

#### 1. 제목 형식
```
[태그] 간단한 설명
```

#### 예시
```
[BUG] 로그인 시 서버 에러 발생
[FEAT] 습관 생성 모달 추가
[DOCS] README.md 수정
[UI] BUTTON 그림자 추가
```

#### 2. 본문 형식
보통 GitHub 이슈 양식을 만들어 쓰거나 다음과 같이 작성함:
```
## 📌 설명
- 어떤 기능/버그인지 명확히 설명

## ✅ 해야 할 일
- [ ] 작업 1
- [ ] 작업 2

## 📎 참고사항 (Optional)
- 관련 링크나 에러 메시지 등
```

### 커밋 메시지 규칙

#### 1. 기본 형식
```
타입: 커밋 내용
ex) Feat: 로딩 페이지 추가
```

#### 2. 타입 종류

| 타입 | 설명 |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 수정 |
| style | 코드 포맷팅 (세미콜론 누락, 들여쓰기 등) |
| refactor | 리팩토링 (기능 변화 없음) |
| test | 테스트 코드 추가 |
| chore | 빌드, 패키지 매니저 설정 등 잡다한 변경 |
| ci | CI/CD 설정 |

---

## 📊 주요 기능 구현 계획

1. **사진 업로드 및 크롭**
   - 모바일 친화적인 이미지 업로드
   - 4:3 비율 크롭 인터페이스
   - 이미지 최적화 (용량 감소)

2. **장소 예측**
   - Vision 모델을 활용한 장소 예측
   - 신뢰도 점수와 함께 최상위 3개 장소 후보 제공
   - 사용자 피드백 수집 및 모델 개선에 활용

3. **여행 캐릭터 분석**
   - OpenAI API를 활용한 캐릭터 분석 생성
   - 분석 결과에 따른 맞춤형 아이콘/일러스트 제공
   - 다양한 성격 유형에 따른 여행 스타일 제안

4. **네컷 콜라주**
   - 커스터마이즈 가능한 네컷 템플릿
   - 분석 결과와 사진을 조합한 공유용 이미지 생성
   - 소셜 미디어 공유 기능

5. **사용자 피드백**
   - 예측 정확도에 대한 피드백 수집
   - 서비스 만족도 평가
   - 익명화된 분석 데이터 저장

---

## 🛠️ API 엔드포인트

| 경로 | 메서드 | 설명 | 요청 데이터 | 응답 데이터 |
| --- | --- | --- | --- | --- |
| `/api/analyze` | POST | 이미지 분석 | `{ image: File }` | `{ place, analysisText, sessionId }` |
| `/api/feedback` | POST | 피드백 제출 | `{ isCorrect, sessionId, comments? }` | `{ success: Boolean }` |
| `/api/share` | GET | 공유 URL 생성 | `{ sessionId }` | `{ shareUrl }` |

---

## 🔐 환경 변수

`.env` 파일에 다음 환경 변수를 설정하세요:

```
# 서버 설정
PORT=3000
NODE_ENV=development

# 데이터베이스
MONGODB_URI=mongodb://localhost:27017/tripon

# OpenAI API
OPENAI_API_KEY=sk-xxxxx
OPENAI_MODEL=gpt-4-1106-preview

# 자체 Vision 모델
VISION_MODEL_PATH=/path/to/model
VISION_MODEL_THRESHOLD=0.7

# 보안
JWT_SECRET=your_jwt_secret_key
```

---

## 🧪 테스트 전략

1. **단위 테스트**:
   - React 컴포넌트 테스트 (React Testing Library)
   - 서비스 및 유틸리티 함수 테스트 (Jest)

2. **통합 테스트**:
   - API 엔드포인트 테스트
   - 사용자 흐름 테스트

3. **E2E 테스트**:
   - 주요 사용자 시나리오 테스트 (Cypress)
