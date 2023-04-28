## 📋개요

FE_PS 기업 연계 프로젝트.  
부동산 정보를 보다 쉽게 알 수 있도록 돕는 웹 서비스 구축.

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

## ⚠️커밋 컨벤션

'태그: 내용'의 형태이며, :뒤에만 space.  
태그 외에는 한글로 표기.
연관 이슈 번호도 표기.

> Feat: 새로운 기능 추가  
> Fix: 버그를 고친 경우  
> Design: css 작업  
> Refactor: 코드 리팩토링  
> Conf: 환경 설정 변경, 패키지 매니저 변경  
> Docs: 문서 작성

```
// 사용예시
git commit -m "Feat: 로그인 페이지 생성 #이슈번호"
git commit -m "Design: 로그인 버튼 디자인 #이슈번호"
git commit -m "Docs: Readme.md 수정 #이슈번호"
```

## 📚사용 라이브러리

- **axios** : api 호출
- **@emotion/styled** : css-in-js
- **zustand** : 전역 상태 관리
