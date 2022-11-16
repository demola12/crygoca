// @flow
import React from "react";
import { css } from "aphrodite"
import { Link } from "react-router-dom";
import styles from "./WebHeaderStyles";
import './WebHeaderStyles.scss'
import { ROUTES } from "../../constants";
import Logo from '../../assets/images/Logo/Logo.png'
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Hamburger from "hamburger-react";

export default function WebHeaderView({click, show}) {
  const [selected, setSelected] = useState("GB");

  return (
    <div className={css(styles.header)+ " header"}>
      <div className={css(styles.logo)}>
      <Link to={ROUTES.HOME} style={{color:"#fff"}}>
      <img src={Logo} />
          </Link>
        
      </div>
      <div className={css(styles.menu)}>
        <div className={css(styles.menulist)}>
          <Link to={ROUTES.COMPARE} style={{color:"#fff"}}>
            Money Transfer
          </Link>
        </div>
        <div className={css(styles.menulist)}>
          <Link to ={ROUTES.ABOUT} style={{color:"#fff"}}>
            About Us
          </Link>
        </div>
        <div className={css(styles.menulist)}>
          <Link to ={ROUTES.BLOG} style={{color:"#fff"}}>
            Blog
          </Link>
        </div>
        <ReactFlagsSelect
          countries={["GB", "FR", "IT"]}
          fullWidth={false}
          selected={selected}
          onSelect={(code) => setSelected(code)}
        />
      </div>

      <div className={css(styles.hamburger)} onClick={()=> click}>
        <Hamburger toggled={show} toggle={click} />
      </div>

    </div>
  );
}
