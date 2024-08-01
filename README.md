# titan-walkers

## Directory 참고

### App

— everything that makes the app run — routing, entrypoints, global styles, providers.
: routing, entrypoints, global styles, providers.
: 앱에 전체적으로 영향을 미치는 컴포넌트

### Pages — full pages or large parts of a page in nested routing.

: signIn, signUp, dashboard, profile, etc. camel로 진행

### Widgets

— large self-contained chunks of functionality or UI, usually delivering an entire use case.

- header, footer, sidebar, etc.

### Features

— reused implementations of entire product features, i.e. actions that bring business value to the user.
: 앱의 다양한 기능을 수행하는 코드

### Entities

— business entities that the project works with, like user or product.
: 데이터를 받아오는 기능

### Shared

— reusable functionality, especially when it's detached from the specifics of the project/business, though not necessarily.

### 세그먼트 참고

- ui : UI 표시와 관련된 모든 것 - UI 구성 요소, 날짜 포맷터, 스타일 등
- api : 백엔드 상호작용 - 요청 함수, 데이터 유형, 매퍼 등
- model : 데이터 모델: 스키마, 인터페이스, 저장소 및 비즈니스 로직
- lib : 이 슬라이스의 다른 모듈에 필요한 라이브러리 코드
- config : 구성 파일 및 기능 플래그
