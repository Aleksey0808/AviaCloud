import React from "react";
import { SvgCss } from 'react-native-svg/css';

const Max = () => {
    const xml = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M2.756 8.822A5.176 5.176 0 1 1 7.932 14L5.49 14a.462.462 0 0 1 0-.923l2.441-.001a4.254 4.254 0 0 0 0-8.506A4.253 4.253 0 0 0 3.68 8.822a.462.462 0 0 1-.923 0"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M3.499 11.98c0-.255.207-.462.462-.462H6.6a.462.462 0 1 1 0 .923h-2.64a.46.46 0 0 1-.462-.461M1.97 10.42c0-.254.207-.461.462-.461h2.641a.462.462 0 1 1 0 .923h-2.64a.46.46 0 0 1-.462-.461M6.176 2.462c0-.255.206-.462.461-.462h2.59a.462.462 0 0 1 0 .923h-2.59a.46.46 0 0 1-.461-.461M10.06 6.669c.18.18.18.472 0 .653l-1.81 1.81a.462.462 0 1 1-.652-.653l1.81-1.81c.18-.18.472-.18.652 0"
      clipRule="evenodd"
    ></path>
  </svg>
    `
     return <SvgCss xml={xml} />
 }
 

export default Max;
