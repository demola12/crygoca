// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./WebFooterStyles"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import Facebook from '../../assets/images/Facebook/Facebook.png'
import LinkedIn from '../../assets/images/LinkedIn/LinkedIn.png'
import Twitter from '../../assets/images/Twitter/Twitter.png'
import Insta from '../../assets/images/Insta/Insta.png'
export default function WebFooterView(props) {

  return (
    <div>
      <footer className={css(styles.footer)}>
        <div className={css(styles.footerBox)}>
          <div className={css(styles.footerContent)}>
            <div className={css(styles.footerHead)}>
                CRYGOCA
            </div>
            <div className={css(styles.footnote)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Phasellus vitae libero magna nisl scelerisque
              nam fermentum. Sed odio nisl nisl tristique augue ut 
              nulla.
            </div>
          </div>
          <div className={css(styles.footerContent)}>
            <h4 className={css(styles.media)}>Company</h4>
            <ul className={css(styles.ul)}>
              <li className={css(styles.li)}><Link to={ROUTES.HOME} className={css(styles.link)}>Money Transfer</Link></li>
              <li className={css(styles.li)}><Link to="/#about" className={css(styles.link)}>Contact</Link></li>
              <li className={css(styles.li)}><Link to={ROUTES.PODCAST} className={css(styles.link)}>Blog</Link></li>
              <li className={css(styles.li)}><Link to={ROUTES.BLOG} className={css(styles.link)}>About us</Link></li>
              <li className={css(styles.li)}><Link to={ROUTES.WAITLIST} className={css(styles.link)}>Terms and privcay</Link></li>
            </ul>
          </div>
          <div className={css(styles.footerContent)}>
            <h4 className={css(styles.media)}>Contact</h4>
            <ul className={css(styles.ul)}>
              <li className={css(styles.li)}>
                Global Impact Finance Ltd
                Avenue de Montchoisi 35 1006 Lausanne
                Switzerland
              </li>
              <li className={css(styles.li)}>contact@crygoca.com</li>
              <li className={css(styles.li)}>+123 5677 48444949</li>
              <div>
                <Link><img className={css(styles.social)} src={Twitter} /></Link>
                <Link><img className={css(styles.social)} src={LinkedIn} /></Link>
                <Link><img className={css(styles.social)} src={Insta} /></Link>
                <Link><img className={css(styles.social)} src={Facebook} /></Link>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
