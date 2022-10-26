// @flow
import * as React from 'react';
import { useState } from "react";
import {css} from "aphrodite"
import styles from "./TermsStyles"
import './TermsStyles.scss'
import { WebFooter, WebHeader, SideDrawer, Backdrop } from '../../components';
import Img23 from '../../assets/images/Img23/Img23.png'
import Img24 from '../../assets/images/Img24/Img24.png'
import { Link } from 'react-router-dom';

export default function TermsView() {
    const[sideToggle, setSideToggle] = useState(false);
    
  return (
    <div className="home">
        <WebHeader show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>        
        <SideDrawer show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <Backdrop show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <div className={css(styles.head)}>
            <h4 className={css(styles.h5)}>Terms and Privacy</h4>
        </div>
        <div className={css(styles.con)}>
            <div>
                <img src={Img23} />
            </div>
            <div className={css(styles.textCon)}>
                <h5 className={css(styles.textHead)}>Privacy Policy</h5>
                <p>When you send money abroad, your bank or money transfer provider often charges you a fee and generally gives you an exchange rate that is worse than the current mid-market exchange rate (also called the interbank rate). The margin on the exchange rate and the fees depends on the currencies and how much you transfer. In short: it’s complicated, and makes it tough for you to know how much you will pay.</p>
                <br />
                <p>That's where Crygoca comes in. Our comparison engine compares all the providers available for your transfer in real-time. You see the total cost including all fees and the margin on the exchange rate. This way, you can select the best option for your transfer.</p>           
            </div>
        </div>
        <div className={css(styles.con)}>
            <div>
                <img src={Img24} />
            </div>
            <div className={css(styles.textCon)}>
                <h5 className={css(styles.textHead)}>Terms of Service</h5>
                <p>When you send money abroad, your bank or money transfer provider often charges you a fee and generally gives you an exchange rate that is worse than the current mid-market exchange rate (also called the interbank rate). The margin on the exchange rate and the fees depends on the currencies and how much you transfer. In short: it’s complicated, and makes it tough for you to know how much you will pay.</p>
                <br />
                <p>That's where Crygoca comes in. Our comparison engine compares all the providers available for your transfer in real-time. You see the total cost including all fees and the margin on the exchange rate. This way, you can select the best option for your transfer.</p>
            </div>
        </div>
        <WebFooter />
    </div>
  );
}
