// @flow
import * as React from 'react';
import { useState } from "react";
import {css} from "aphrodite"
import styles from "./Blog2Styles"
import './Blog2Styles.scss'
import { WebFooter, WebHeader, Card3, SideDrawer, Backdrop } from '../../components';
import Img12 from '../../assets/images/Img12/Img12.png'
import Img13 from '../../assets/images/Img13/Img13.png'
import Img14 from '../../assets/images/Img14/Img14.png'
import Img15 from '../../assets/images/Img15/Img15.png'
import Img16 from '../../assets/images/Img16/Img16.png'
import Img22 from '../../assets/images/Img22/Img22.png'
import UserImg from '../../assets/images/Blog/UserImg.png'
import Date from '../../assets/images/Blog/Date.png'
import { Link } from 'react-router-dom';

export default function Blog2View() {
    const[sideToggle, setSideToggle] = useState(false);
    
  return (
    <div className="home">
        <WebHeader show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>        
        <SideDrawer show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <Backdrop show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <div className={css(styles.head)}>
            <h4 className={css(styles.h5)}>Blog</h4>
        </div>
        <div className={css(styles.imgCon)}>
            <img src={Img22} className={css(styles.img)} />
            <div className={css(styles.date)}>
                <div className={css(styles.user)}>
                    <img src={UserImg} />
                    <p className={css(styles.p)}>Sharon</p>
                </div>
                <div className={css(styles.user)}>
                    <img src={Date} />
                    <p className={css(styles.p)}>29/06/2022</p>
                </div>
            </div>
            <div style={{marginBottom: "35px"}}>
                <h5 className={css(styles.title)}>Find the Fastest Way to Send Money Abroad</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at consequat ultricies nibh quis vehicula in. In nulla urna eu, quisque. Enim tristique viverra ornare dignissim feugiat enim. Lobortis pharetra eget consequat elementum justo urna. Laoreet donec non ornare felis augue lectus sed. Dui risus nunc adipiscing leo vitae posuere sem. Egestas faucibus consequat velit, sit ultrices sollicitudin sagittis, imperdiet porttitor. Eleifend pulvinar gravida fames curabitur. Diam tempor elit, euismod enim non, elementum, lectus.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at consequat ultricies nibh quis vehicula in. In nulla urna eu, quisque. Enim tristique viverra ornare dignissim feugiat enim. Lobortis pharetra eget consequat elementum justo urna. Laoreet donec non ornare felis augue lectus sed. Dui risus nunc adipiscing leo vitae posuere sem. Egestas faucibus consequat velit, sit ultrices sollicitudin sagittis, imperdiet porttitor. Eleifend pulvinar gravida fames curabitur. Diam tempor elit, euismod enim non, elementum, lectus.</p>
            </div>
            <Link className={css(styles.link)}>Read more</Link>
        </div>
        <div className={css(styles.con)}>
            <div className={css(styles.cardWrapper2)}>
                <Card3
                    img={Img12}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="Find the Fastest Way to Send Money Abroad"
                    text="Before you make an international money transfer, compare the... " />
                <Card3
                    img={Img13}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="Find the Fastest Way to Send Money Abroad"
                    text="Before you make an international money transfer, compare the... " />
                <Card3
                    img={Img14}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="Western Union vs MoneyGram"
                    text="Before you make an international money transfer, compare the... " />
                <Card3
                    img={Img15}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="The UK's Best Three Challenger Banks of 2021"
                    text="Before you make an international money transfer, compare the... " />
            </div>
        </div>
        <WebFooter />
    </div>
  );
}
