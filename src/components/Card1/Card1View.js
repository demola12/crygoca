// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./Card1Styles"
import { ROUTES } from "../../constants";

export default function Card1View(props) {

  return (
    <div className={css(styles.cardCon)}>
      <img src={props.img}  alt="..." className={css(styles.img)}/>
      <h5 className={css(styles.h5)}>{props.name}</h5>
      <div className={css(styles.text)}>{props.text}</div>
    </div>
  );
}
