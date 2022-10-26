// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./Card4Styles"
import { ROUTES } from "../../constants";

export default function Card4View(props) {

  return (
    <div className={css(styles.cardCon)}>
      <div className={css(styles.num)}>{props.num}</div>
      <h5 className={css(styles.h5)}>{props.title}</h5>
      <div className={css(styles.text)}>{props.text1}</div>
      <div className={css(styles.text)}>{props.text2}</div>
    </div>
  );
}
