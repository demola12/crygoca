// @flow
import * as React from 'react';
import { useState } from "react";
import {css} from "aphrodite"
import styles from "./AboutStyles"
import './AboutStyles.scss'
import { WebFooter, WebHeader, Card4, SideDrawer, Backdrop, Card5 } from '../../components';
import Img21 from '../../assets/images/Img21/Img21.png'
import Img17 from '../../assets/images/Img17/Img17.png'
import Img18 from '../../assets/images/Img18/Img18.png'
import Img19 from '../../assets/images/Img19/Img19.png'
import Img20 from '../../assets/images/Img20/Img20.png'
import { Link } from 'react-router-dom';

export default function HomeView() {
    const[sideToggle, setSideToggle] = useState(false);
  return (
    <div className="home">
        <WebHeader show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>        
        <SideDrawer show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <Backdrop show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <div className={css(styles.head)}>
            <h4 className={css(styles.h5)}>About Us</h4>
        </div>
        <div className={css(styles.subHead)}>
            <p>Crygoca.com is a leading global resource to help you make the best decision about your 
                international money transfer needs. To date, our users have transferred over US$1.7 
                billion via the providers listed on our site. We believe that through a detailed, 
                research-led approach, we can ensure we continue to provide the best information to 
                allow you to compare money transfer providers internationally.</p>
                <br />
            <p>We first launched our comparison service in February 2020, and today we 
                support over 70 currencies across 126 countries. In addition to our 
                comparison services.</p>
        </div>
        <div  className={css(styles.subHead2)}>
            <div>
                <img src={Img21} />
            </div>
            <div className={css(styles.subHead2Con)}>
                <h4 className={css(styles.h4)}>How Crygoca can save your money</h4>
                <p>When you send money abroad, your bank or money transfer provider often charges you 
                    a fee and generally gives you an exchange rate that is worse than the current 
                    mid-market exchange rate (also called the interbank rate). 
                    The margin on the exchange rate and the fees depends on the currencies and 
                    how much you transfer. In short: it’s complicated, and makes it tough for you 
                    to know how much you will pay.</p>
                    <br />
                <p>That's where Crygoca comes in. Our comparison engine compares all the providers 
                    available for your transfer in real-time. You see the total cost including all 
                    fees and the margin on the exchange rate. This way, you can select the best option 
                    for your transfer.</p>
            </div>
        </div>
        <div className={css(styles.con)}>
            <h5 className={css(styles.h4)} style={{textAlign: "center"}}>How to send money abroad at the possible best rate</h5> 
            <div className={css(styles.cardWrapper)}>
                <Card4
                    num="1"
                    title="Choose where to send money and amount"
                    text1="Use the form at the top left of this page, select the country you’re sending money FROM and the country you’re sending money TO and the amount you want to transfer." 
                    text2="Enter the exact amount you want to send and click on COMPARE. The cheapest provider varies according to how much you’re sending." />
                <Card4
                    num="2"
                    title="Choose the best provider from our top list"
                    text1="Once you Click on COMPARE, our comparison engine will fetch detailed results from money transfer providers, their current rates and fees."
                    text2="In each section, we made available the recipient get. The exchange rate and the transfer fee. If there is any." />
                <Card4
                    num="3"
                    title="Send money and save on transfer fees"
                    text1="When you select the provider that is the best for your needs, you will be redirected to their website, where you sign up and validate your account. before you make the transfer."
                    text2="Most providers will give you different options to pay for your transfer, such as debit or credit cards, but the cheapest option is usually via a local online bank transfer to the provider's bank account in your country." />
            </div>
        </div>
        <div className={css(styles.con)}>
            <h5 className={css(styles.h4)} style={{textAlign: "center"}}>Some of Our Team</h5> 
            <div className={css(styles.cardWrapper)}>
                <Card5
                    img={Img17}
                    name="Lukeman John"
                    position="Founder" />
                <Card5
                    img={Img18}
                    name="Barrack Law"
                    position="Software Engineer" />
                <Card5
                    img={Img19}
                    name="Micheal Escort"
                    position="Finacial Director" />
                <Card5
                    img={Img20}
                    name="Jane Doe"
                    position="Customer Service" />
            </div>
        </div>
                    
        <WebFooter />
    </div>
  );
}
