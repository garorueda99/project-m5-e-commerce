// Libraries
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: Arial, Helvetica, sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat, sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

/* Header */
@media ( min-width: 501px ) {
  span.sm-header-title { display: none }
  span.sm-top-nav-icon { display: none }
  span.md-top-nav-text { display: inline-block }
}
@media ( max-width: 500px ) {
  span.md-header-title { display: none }
  span.md-top-nav-text { display: none }
  span.sm-top-nav-icon { display: inline-block }
}
`;
