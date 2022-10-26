// @flow
import * as React from 'react';
import { useState } from "react";
import {css} from "aphrodite"
import styles from "./CompareStyles"
import './CompareStyles.scss'
import { WebFooter, WebHeader, SideDrawer, Backdrop, CompareBox } from '../../components';
import { Link } from 'react-router-dom';
import { ColorRing } from  'react-loader-spinner';
export default function CompareView() {
    const[sideToggle, setSideToggle] = useState(false);
   
  return (
    <div className="home-compare">
        <WebHeader show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>        
        <SideDrawer show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <Backdrop show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <CompareBox></CompareBox>
        <div className='loader-compare'>
        
        <ColorRing
  visible={true}
  height="125"
  width="125"
  ariaLabel="Comparing live deals"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#DB9406','#DB9406','#DB9406','#DB9406','#DB9406']}
/>
        <p>Comparing live deals</p>
        </div>
        
        <WebFooter />
    </div>
  );
}
