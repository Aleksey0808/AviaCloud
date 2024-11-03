import React from "react";
import { SvgCss } from 'react-native-svg/css';

const Fuel = () => {
    const xml = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
  >
    <path
      fill="#fff"
      d="M11.124 2.574 10.2 1.65 9.354.804a.603.603 0 0 0-.852.852l.6.6-.498 1.494a1.8 1.8 0 0 0 .438 1.842l1.77 1.8V10.2a.6.6 0 0 1-1.2 0V9a1.8 1.8 0 0 0-1.8-1.8H7.2V1.8A1.8 1.8 0 0 0 5.4 0H1.8A1.8 1.8 0 0 0 0 1.8v8.4A1.8 1.8 0 0 0 1.8 12h3.6a1.8 1.8 0 0 0 1.8-1.8V8.4h.6a.6.6 0 0 1 .6.6v1.2a1.8 1.8 0 0 0 3.6 0V4.698a3 3 0 0 0-.876-2.124M6 10.2a.6.6 0 0 1-.6.6H1.8a.6.6 0 0 1-.6-.6V6H6zm0-5.4H1.2v-3a.6.6 0 0 1 .6-.6h3.6a.6.6 0 0 1 .6.6zm4.8.852-.924-.924a.6.6 0 0 1-.144-.6l.306-.924.234.24a1.8 1.8 0 0 1 .528 1.254z"
    ></path>
  </svg>
    `
     return <SvgCss xml={xml} />
 }
 

export default Fuel;
