import { css } from 'aphrodite'
import styles from './styles'
import { Button } from '../../../components';
import monetgram from "../../../assets/images/monetgram.svg"

import { useState } from 'react';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
export default function (props) {
    let list=[]
    return <>

        <div className={css(styles.container)}>

            <div className={css(styles.logo)} >
                <img height={"70px"} src={props.data?.logo} />
                <p>{props.data?.name}</p>
                <Button color={"#219653"} title="Popular" />
            </div>
            <div
                style={{
                    flex: 1
                }}>
                <div className={css(styles.row,styles.titleFont)}><div
                    className={css(styles.first)}>Transfer Time</div><div
                        className={css(styles.flex)}>Pay By</div><div
                            className={css(styles.first)}>Receipient gets</div></div>
                <div></div>
                {
                    
                    props.data.result.map((v,idx)=>{
                        if(!list.includes(v?.pay_type)){
                            list.push(v?.pay_type)
                            return <> 
                            <div key={idx} className={css(styles.row,styles.mainFont)}>
                                <div className={css(styles.first)}>In Minutes</div>
                                <div className={css(styles.flex)}>{v?.pay_type}</div>
                                <div className={css(styles.first)}>{(Number(v?.amount*v?.rate)-(Number(v?.transaction_fee ||0)*Number(v?.rate ||0))).toFixed(2)} {v?.currency?.toUpperCase()}</div>
                                </div>
                            <div style={{border:"1px solid #D7D7D7"}}></div>
                            </>
                        }
                        
                        
                    })
                }
               
                
                
              
                <div></div>
            </div>
            <div style={{
                width: 200,
                display: "flex"
            }}>

                <Button click={()=>{window.open(props.data?.pay_info[Object.keys(props.data?.pay_info)[0]].url)}} style={{ marginTop: "auto", marginBottom: "auto" }} title={`Go to ${props.data?.name}`} />
            </div>
        </div>
    </>
}


