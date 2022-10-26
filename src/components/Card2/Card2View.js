// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./Card2Styles"
import { ROUTES } from "../../constants";

export default function Card2View(props) {

  return (
    <div className={css(styles.cardCon)}>
      <div className={css(styles.num)}>{props.name}</div>
      <div className={css(styles.text)}>{props.text}</div>
    </div>
  );
}
