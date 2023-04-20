## 📋개요

FE_PS 기업 연계 프로젝트.
부동산 정보를 보다 쉽게 알 수 있도록 돕는 웹 서비스 구축.

## ⚙️실행

```
git clone https://github.com/growing-devs/easy-to-real-estate-frontend.git
cd easy-to-real-estate-frontend
npm i
npm run dev
```

## 📁폴더구조

```
├── public
│   └── favicon.ico
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── 🗀api  // api 관리 폴더
│   │   └── api.ts
│   ├── 🗀assets  // 로고 이미지 등 사용 파일 관리 폴더
│   ├── 🗀components  // 재사용 가능한 컴포넌트 저장 폴더
│   │   └── 🗀Example  // 컴포넌트별로 폴더 구조 생성 예시
│   │       ├── index.tsx
│   │       └── style.tsx  //css-in-js 분리.
│   ├── 🗀pages  // 페이지 저장 폴더
│   │   ├── 🗀Home  // 홈 화면 페이지
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   ├── 🗀Detailed  // 상세 심사 페이지들
│   │   │   ├── Upload.tsx
│   │   │   ├── Explanation.tsx
│   │   │   ├── PdfInfo.tsx
│   │   │   ├── LocationInfo.tsx
│   │   │   ├── AuctionInfo.tsx
│   │   │   └── style.tsx
│   │   ├── 🗀Simple  // 간편 심사 페이지들
│   │   ├── 🗀News  // 부동산 뉴스 페이지
│   │   └── 🗀NotFound
│   ├── 🗀store  // 전역 상태 관리 폴더
│   │   └── ㄴstore.js
│   ├── 🗀styles  // 공용 스타일 관리 폴더
│   │   ├── DesignSystem.tsx  // 폰트 관리
│   │   ├── GlobalStyle.tsx  // reset.css
│   │   └── Theme.ts  // 테마 컬러 관리
│   └── 🗀util  // 유틸 함수, 커스텀 훅 저장 폴더
└── index.html
```

## 📚사용 라이브러리

- **axios** : api 호출
- **@emotion/styled** : css-in-js
- **zustand** : 전역 상태 관리
