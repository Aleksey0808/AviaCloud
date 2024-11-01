import React from "react";
import { SvgCss } from 'react-native-svg/css';

const Setting = () => {
    const xml = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="31"
    fill="none"
    viewBox="0 0 31 31"
  >
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth="1.788"
      d="M18.604 17.333a4.397 4.397 0 1 0-3.998 2.565"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth="1.788"
      d="M3.615 12.479v6.044l3.402 1.36-.522 3.625 5.234 3.02 2.878-2.263 2.877 2.264 5.234-3.021-.522-3.626 3.4-1.36V12.48l-3.399-1.36.523-3.625-5.235-3.023-2.878 2.266-2.88-2.266-5.234 3.023.523 3.624"
    ></path>
  </svg>`
     return <SvgCss xml={xml} />
 }
 

export default Setting;
