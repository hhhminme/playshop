// GlobalStyle.jsx

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    /* COLOR */
    --grey50: #f9fafb;
    --grey100: #f2f4f6;
    --grey200: #e5e8eb;
    --grey300: #d1d6db;
    --grey400: #b0b8c1;
    --grey500: #8b95a1;
    --grey600: #6b7684;
    --grey700: #4e5968;
    --grey800: #333d4b;
    --grey900: #191f28;
    --greyOpacity50: rgba(0,23,51,0.02);
    --greyOpacity100: rgba(2,32,71,0.05);
    --greyOpacity200: rgba(0,27,55,0.1);
    --greyOpacity300: rgba(0,29,58,0.18);
    --greyOpacity400: rgba(0,29,54,0.31);
    --greyOpacity500: rgba(3,24,50,0.46);
    --greyOpacity600: rgba(0,19,43,0.58);
    --greyOpacity700: rgba(3,18,40,0.7);
    --greyOpacity800: rgba(0,12,30,0.8);
    --greyOpacity900: rgba(2,9,19,0.91);
    --white: #fff;
    --black: #000;
    --blue50: #e8f3ff;
    --blue200: #90c2ff;
    --blue100: #c9e2ff;
    --blue300: #64a8ff;
    --blue400: #4593fc;
    --blue500: #3182f6;
    --blue600: #2272eb;
    --blue700: #1b64da;
    --blue800: #1957c2;
    --blue900: #194aa6;
    --red50: #ffebee;
    --red100: #ffcdd2;
    --red200: #ef9a9a;
    --red300: #e57373;
    --red400: #ef5350;
    --red500: #f44336;
    --red600: #e53935;
    --red700: #d32f2f;
    --red800: #c62828;
    --red900: #b71c1c;
    --orange50: #fff3e0;
    --orange100: #ffe0b2;
    --orange200: #ffcc80;
    --orange300: #ffb74d;
    --orange400: #ffa726;
    --orange500: #ff9800;
    --orange600: #fb8c00;
    --orange700: #f57c00;
    --orange800: #ef6c00;
    --orange900: #e65100;
    --yellow50: #fffde7;
    --yellow100: #fff9c4;
    --yellow200: #fff59d;
    --yellow300: #fff176;
    --yellow400: #ffee58;
    --yellow500: #ffeb3b;
    --yellow600: #fdd835;
    --yellow700: #fbc02d;
    --yellow800: #f9a825;
    --yellow900: #f57f17;
    --purple50: #f3e5f5;
    --purple100: #e1bee7;
    --purple200: #ce93d8;
    --purple300: #ba68c8;
    --purple400: #ab47bc;
    --purple500: #9c27b0;
    --purple600: #8e24aa;
    --purple700: #7b1fa2;
    --purple800: #6a1b9a;
    --purple900: #4a148c;
    --teal50: #e1f0f2;
    --teal100: #b1dade;
    --teal200: #81c7cc;
    --teal300: #4caeb5;
    --teal400: #269da6;
    --teal500: #008c96;
    --teal600: #00818a;
    --teal700: #007278;
    --teal800: #006369;
    --teal900: #004d4d;
    --green50: #e5fff4;
    --green100: #abf2d4;
    --green200: #5ae9ad;
    --green300: #1cd98a;
    --green400: #05c072;
    --green500: #00a661;
    --green600: #009959;
    --green700: #008a50;
    --green800: #007544;
    --green900: #005c36;
    --whiteOpacity50: rgba(209,209,253,0.05);
    --whiteOpacity100: rgba(217,217,255,0.11);
    --whiteOpacity200: rgba(222,222,255,0.19);
    --whiteOpacity300: rgba(224,224,255,0.27);
    --whiteOpacity400: rgba(232,232,253,0.36);
    --whiteOpacity500: rgba(242,242,255,0.47);
    --whiteOpacity600: rgba(248,248,255,0.6);
    --whiteOpacity700: rgba(253,253,255,0.75);
    --whiteOpacity800: rgba(253,253,254,0.89);
    --whiteOpacity900: #fff;
    --inverseGrey50: #202027;
    --inverseGrey100: #2c2c35;
    --inverseGrey200: #3c3c47;
    --inverseGrey300: #4d4d59;
    --inverseGrey400: #62626d;
    --inverseGrey500: #7e7e87;
    --inverseGrey600: #9e9ea4;
    --inverseGrey700: #c3c3c6;
    --inverseGrey800: #e4e4e5;
    --inverseGrey900: #fff;
    /* RADIUS */
    --radius-s: 4px;
    --radius-m: 8px;
    --radius-l: 16px;
    --radius-xl: 20px;
    --radius-xxl: 24px;
    /* PADDING */
    --padding-base-vertical: 14px;
    --Container: 18px;
    --padding-t-vertical: 4px;
    --padding-t-horizontal: 10px;
    --padding-s-vertical: 8px;
    --padding-s-horizontal: 14px;
    --padding-l-vertical: 18px;
    --padding-l-horizontal: 28px;
    --padding-container-base: 48px;
    /* BUTTON */
    --btn-font-size: 15px;
    --btn-font-size-t: 12px;
    --btn-font-size-s: 14px;
    --btn-font-size-l: 17px;
    --btn-bg-base: var(--grey100);
    --btn-color-base: var(--grey700);
    --btn-danger-bg: var(--red50);
    --btn-border-radius: var(--radius-m);
    --btn-border-radius-t: 6px;
    /* BADGE RADIUS */
    --badge-radius--adjust: 10px;
    /* INDEX */
    --nav-index: 50;
    --dimmer-index: 100;
    --toast-index: 500;
    /* FONT */
    --line-height-base: 1.6;
    --line-height-adjust: 1.3;
    --font-size-h1: 56px;
    --font-size-h2: 48px;
    --font-size-h3: 36px;
    --font-size-h4: 32px;
    --font-size-h5: 24px;
    --font-size-h6: 20px;
    --font-size-h7: 17px;
    --font-size-p: 15px;
    --font-size-sm: 13px;
    --font-weight-bold: bold;
    --font-weight-semibold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: normal;
    /* SHADOW */
    --shadow-s: 0 0 4px 0 var(--greyOpacity100),0 4px 16px 0 var(--greyOpacity100);
    --shadow-m: 0 8px 16px 0 var(--greyOpacity200),0 4px 8px 0 var(--greyOpacity100);
    --shadow-l: 0 24px 40px 0 var(--greyOpacity50),0 16px 24px 0 var(--greyOpacity200),0 0 8px 0 var(--greyOpacity100);
    /* INPUT */
    --input-h-padding: 18px;
    --input-h-padding-s: var(--padding-s-horizontal);
    --input-v-padding: 14px;
    --input-v-padding-s: var(--padding-s-vertical);
    --input-height: 48px;
    --input-height-s: 40px;
    /* NAV */
    --navbar-height: 60px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-size: 62.5%;
  }

  html,body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5, h6, span, p, div {
    word-break: keep-all;
    white-space: pre-wrap;
  }
`;

export default GlobalStyle;
