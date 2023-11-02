# !! 꼭 읽어볼 것 필요시 더 추가할 내용이 있다면 자유롭게 추가해주세요 :)

## 프로젝트 설정 순서

1. Yarn Berry 버전 세팅

```bash
yarn set version berry
```

2. 의존성 파일 설치

```bash
yarn
```

3. 서버 실행

```bash
yarn dev
```

---

## "모듈 또는 해당 형식 선언을 찾을 수 없습니다." 오류 발생 시

<img alt="스크린샷 2023-11-02 오전 12 48 44" src="https://github.com/Zicdding/zicdding-dashboard-front/assets/26861962/8368dad9-d9d4-4a82-a64c-9dd9f1820b02">

Yarn Berry 에서 지정된 편집기에 대한 기본 SDK와 설정 생성

```bash
yarn dlx @yarnpkg/sdks vscode
```

---

## VSCode Extension

- ESLint
- Perttier
- ZipFS
- PostCSS Language Support
- Code Spell Checker (options)
- Auto Close Tag / Auto Rename Tag (options)
- Comment Anchors (options)
- GitLens (options)

---

## CSS Guide

1. px(x) -> rem(o)
2. CSS-in-JS 사용할 것
3. 최대한 tailwindcss 에 정의한 class만 사용할 것
4. 공통적으로 사용할만한 Spacing, Flex, FontStyle 등은 필요 시 추가 후 PR 시 공유(언급)할 것

---

## [참고]

- https://ko.vitejs.dev/guide/
- https://tailwindcss.com/docs/guides/vite
