# 설정

## .prettierrc 설정

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

## 의존성

> 필요 라이브러리

- react-router-dom : 라우터
- sass, styled-components, classnames : 스타일링 목적
- immer : 불변성 관리
- react-icons : 리액트에서 제공하는 아이콘 라이브러리
- @loadable/component : 지연로딩
- react-helmet-async : head 태그 내의 특정태그의 내용을 변경시

- 의존성 설치

```
yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component
yarn add react-helmet-async
```

## react-helmet-async 설정

- src/index.js

```jsx
...

import { HelmetProvider } from 'react-helmet-async';

...

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

```

- 사용법

```jsx
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트!</title>
      </Helmet>
    </>
  );
};

export default App;
```

## 메세지, 다국어 처리

- 의존성 : i18next, react-i18next
- 의존성 설치

```
yarn add i18next react-i18next
```

- 언어파일 생성
  - src/langs/ko, src/langs/en 폴더 생성
  - 각 폴더별로 공통 문구 - commons.js, 검증 문구 - validations.js, 에러 문구 - errors.js
- 언어파일 통합 : 예) src/langs/ko/index.js

```javascript
import commons from './commons';
import validations from './validations';
import errors from './errors';

const ko = { ...commons, ...validations, ...errors };

export default ko;
```

- 설정 파일 구성 : src/i18n.js

```javascript
import i18n from 'il18next';
import { initReactI18next } from "react-i18next";
import ko from './Langs/ko';  //ko/index.js 와 같음   알아서 index.js가 따라옴(?)
import en from './Langs/en';  // 이 친구도 같음

const resources = {
    en: {
        translation : en,
    },
    ko : {
        translation: ko,
    },
};

i18n.use(initReactI18next).init({
    resources //resources:resources 이름과 값이 같으면 한개만 적어도 된다!
    lng : 'ko',
});
```

- 설정 반영 : src/index.js

```javascript
import './il8n';
```

- 적용하기 : useTranslation 훅 / react-i18next
  - t : 메세지 조회 함수
  - i18n : 편의기능 객체, changeLanguate(...) : 언어 변경

```jsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트!</title>
      </Helmet>
      <div>{t('아이디')}</div>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="button" onClick={() => i18n.changeLanguage('ko')}>
        한국어
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </>
  );
};

export default App;
```

# 레이아웃 구성
  - src/layouts/MainLayout.js
  - src/outlines/Header.js
  - src/outlines/Footer.js

# 라우팅 구성
## 회원
 - /member/join : 회원가입
 - /member/login : 로그인

