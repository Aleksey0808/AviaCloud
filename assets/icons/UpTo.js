import React from "react";
import { SvgCss } from 'react-native-svg/css';

const UpTo = () => {
    const xml = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    fill="none"
    viewBox="0 0 13 13"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.667 8.333.874-2.793 2.793-.873-.874 2.792z"
      clipRule="evenodd"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"
    ></path>
  </svg>
    `
     return <SvgCss xml={xml} />
 }
 

export default UpTo;
