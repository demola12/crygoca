// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./ButtonStyles"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

export default function ButtonView(props) {

  return (
    <button className={css(styles.button)}>
      {props.title}
    </button>
  );
}
