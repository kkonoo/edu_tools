# edu_tools

수업용 인터랙션 도구 모음 (Slido 대체, 무료 셀프호스팅).
Firebase Realtime Database 무료(Spark) 플랜 + GitHub Pages로 동작하며 인원·횟수 제한 없이 사용 가능.

## 도구

| 도구 | 경로 | 기능 |
|---|---|---|
| 라이브 투표 | [`/vote`](https://kkonoo.github.io/edu_tools/vote/)  | 찬반·객관식 투표(실시간 막대그래프), 워드클라우드, Q&A(좋아요 정렬) |
| 라이브 퀴즈 | [`/quiz`](https://kkonoo.github.io/edu_tools/quiz/) | 정답 채점, 점수 집계 |
| 토론 도우미 | [`/debate`](https://kkonoo.github.io/edu_tools/debate/) | 랜덤 조 편성(조 안 번호 = 발언 순서), 단계별 발언 타이머(순서·시간 편집 가능) |

## 사용법

**진행자**
1. `https://kkonoo.github.io/edu_tools/vote/` 접속 → **새 세션 만들기**
2. 4자리 참여 코드와 QR이 생성됨 → 빔프로젝터에 표시
3. 활동(찬반 투표, 워드클라우드, Q&A)을 추가하고 **시작** → 실시간 결과 확인
4. 세션 코드는 브라우저에 저장되어 「내 세션 다시 열기」로 재사용 가능

**참여자 (학생)**
- QR 스캔 또는 사이트에서 코드 입력 → 제출. 앱 설치·로그인 불필요, 익명.
- 기기당 1표 (선택 변경은 가능)

## 구조

- 각 도구는 `index.html` 하나 + 공용 `assets/` (별도 빌드·서버 없음)
  - `assets/style.css`: 공통 디자인(색·글꼴·상단 바·카드·버튼). 도구마다 다른 부분은 각 `index.html`의 `<style>`
  - `assets/theme.js`: 밝은/어두운 화면 (기기 설정을 따르고 상단 버튼으로 바꿀 수 있음)
- 데이터: Firebase Realtime Database (`sessions/{코드}` 하위에 저장)
  - 토론 도우미는 Firebase를 쓰지 않음 — 진행자 화면(빔프로젝터)에서만 동작하고 명단·순서는 브라우저에 저장
- 새로 설치하려면 Firebase 프로젝트 생성 후 `index.html`의 `firebaseConfig`에 본인 설정값 입력 — 자세한 절차는 `설치가이드.md` 참고

## 주의

- DB 규칙이 `sessions` 하위 공개 읽기/쓰기로 설정되어 있음. 익명 수업용 전제이므로 민감정보 수집에 사용하지 말 것. 미사용 기간에는 규칙을 `false`로 잠그는 것을 권장.
- Firebase 무료 플랜 한도: 동시 접속 100명, 저장 1GB, 다운로드 10GB/월 ([요금](https://firebase.google.com/pricing))
