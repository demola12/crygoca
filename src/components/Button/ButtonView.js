// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./ButtonStyles"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

export default function ButtonView(props) {
  
  return (
    <button onClick={()=>{props.click()}} style={{...props.style,...{background:props.color?props.color:"#DB9406"}}} className={css(styles.button)}>
      {props.title}
    </button>
  );
}
