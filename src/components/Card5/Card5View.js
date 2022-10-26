// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./Card5Styles"
import { ROUTES } from "../../constants";

export default function Card5View(props) {

  return (
    <div className={css(styles.cardCon)}>
      <div className={css(styles.imgBox)}>
        <img src={props.img}  alt="..." className={css(styles.img)}/>
      </div>
      <h5 className={css(styles.h5)}>{props.name}</h5>
      <div className={css(styles.text)}>{props.position}</div>
    </div>
  );
}
