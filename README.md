# dataUSA 클론 프로젝트

- 코로나 바이러스를 비롯한 여러 데이터를 수집, 분석 및 차트와 지도로 시각화한 dataUSA Web사이트 클론

### 개발 인원 및 기간

- 개발 기간: 2020/08/03 ~ 2020/08/14
- 개발 인원: 프론트엔드 3명, 백엔드 2명

## 팀원

- 프론트엔드: 윤지영, 서동찬, 김효식
- 백엔드: 이홍일, 이태성

## 개발 목적

- React Hooks와 styled-component를 이용하여 React에서 함수형 컴포넌트 및 styled-component의 작동 방법을 익힌다.
- 여러 Hooks(useState, useEffect, useRef ...)를 사용하여 props, state의 활용 방법을 다시 복습해본다.
- Redux를 사용하여 단방향 데이터 흐름을 구현해보고 사용 목적에 대하여 고민해본다.

## 기술 스택 및 구현 기능

### 1. 기술 스택

- JavaScript (ES6)
- React (CRA, Functional Component, Styled Component)
- Redux
- Git /Github

#### 리액트 라이브러리

- React-router-dom
- Highchart
- material-ui

### 2. 협업 툴

- Git
- Slack
- Trello

### 3. 구현 기능 상세 설명

#### [COVID19 페이지]

- highchart를 사용하여 line 차트, map으로 데이터 시각화
- material-ui를 사용하여 데이터 테이블 구현
- axios를 사용하여 백엔드와 데이터 연결
- 나라, 장소 카테고리별 데이터 필터링 시각화
- 데이터를 받아오는 동안 loading 이미지 적용 및 error 핸들링
- useRef를 사용하여 아이콘 클릭 시 해당 차트 데이터로 이동

#### [로그인 페이지]

- 실제 홈페이지에는 없는 로그인 페이지 구현
- 구글 api, 카카오 api를 통한 소셜로그인 기능 구현

#### [메인 페이지]

- scroll 위치에 따라 달라지는 style 적용
- keyframes를 사용하여 움직임이 부드러운 sidebar 구현
- Data Card 클릭 시 장바구니 추가 기능 구현
- Cart Icon hover시 Cart 내역 수정 및 확인창 구현

#### [Data Cart페이지]

- 실제 홈페이지에는 없는 Data Cart페이지 구현
- Redux를 사용하여 Data card 상태의 중앙화

### 기타

- 일하는시간: 10 to 10
- Agile 방법론을 적용하여 프로젝트를 효율적으로 진행할 수 있었고 팀워크의 중요성을 느낌
- Git rebase를 통해 commit message의 간결화, git flow를 다시 복습하고 협업 시에 보다 효과적으로 git을 사용하는 법에 대해 학습
