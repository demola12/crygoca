// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./Card3Styles"
import { ROUTES } from "../../constants";

export default function Card3View(props) {

  return (
    <div className={css(styles.cardCon)}>
      <div className={css(styles.imgBox)}>
        <img src={props.img}  alt="..." className={css(styles.img)}/>
        <div className={css(styles.innnerCon)}>
          <div className={css(styles.InnerImg)}>
            <img src={props.img2}  alt="..." className={css(styles.img2)}/>
            <p>{props.name}</p>
          </div>
          <div>{props.date}</div>
        </div>
      </div>
      <h5 className={css(styles.h5)}>{props.heading}</h5>
      <div className={css(styles.text)}>{props.text}</div>
    </div>
  );
}
