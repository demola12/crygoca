// @flow
import * as React from 'react';
import { useState } from "react";
import OptionCard from "./OptionCard"
import ResultCard from "./ResultCard"
import { css } from "aphrodite"
import styles from "./CompareStyles"

import './CompareStyles.scss'
import { WebFooter, WebHeader, SideDrawer, Backdrop, CompareBox } from '../../components';
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
export default function CompareView(props) {
  
  const [sideToggle, setSideToggle] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [resultStatus, setResultStatus] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const loader=(boolData)=>{
    setLoaderStatus(boolData)
  }
  const result=(resultData)=>{
    setResultStatus(resultData)
  }
  const filter=(filterData)=>{
    setFilterStatus(filterData)
  }
  return (
    <div className="home-compare">
      <WebHeader show={sideToggle} click={() => setSideToggle(!sideToggle)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(!sideToggle)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(!sideToggle)} />
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 40 }}>
        <CompareBox data={{
          from:props.match.params.from.toUpperCase(),
          to:props.match.params.to.toUpperCase(),
          send:props.match.params.send.toUpperCase(),
          convert:props.match.params.convert.toUpperCase(),
          amount:props.match.params.amount,
        }} loader={(e)=>{loader(e)}} result={(e)=>{result(e)}} filter={(e)=>{filter(e)}}  ></CompareBox>
      </div>
      
        {
          filterStatus.length>2 &&(
            <div
            style={{display:"flex",gap:20,justifyContent:"center"}}
            >
            {filterStatus.map(v=>{
              return <div style={{
                width:392,
                height:170
              }}>
              <OptionCard data={v}></OptionCard>
              </div>
            })}
           </div>
          )
        }
      
     <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      {
        resultStatus.map(v=>{
          return  <ResultCard data={v} ></ResultCard>
        })
      }
   </div>
      <div className='loader-compare'>

        <ColorRing
          visible={loaderStatus}
          height="125"
          width="125"
          ariaLabel="Comparing live deals"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#DB9406', '#DB9406', '#DB9406', '#DB9406', '#DB9406']}
        />
        <p>Comparing live deals</p>
      </div>

      <WebFooter />
    </div>
  );
}
