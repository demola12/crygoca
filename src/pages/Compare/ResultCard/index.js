import { css } from 'aphrodite'
import styles from './styles'
import { Button } from '../../../components';
import monetgram from "../../../assets/images/monetgram.svg"

import { useState } from 'react';
export default function (props) {

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
                        return <> 
                        <div key={idx} className={css(styles.row,styles.mainFont)}>
                            <div className={css(styles.first)}>{v?.transaction_time}</div>
                            <div className={css(styles.flex)}>{v?.pay_type}</div>
                            <div className={css(styles.first)}>{((v?.amount*v?.rate)+v?.transaction_fee).toFixed(2)} {v?.currency?.toUpperCase()}</div>
                            </div>
                        <div style={{border:"1px solid #D7D7D7"}}></div>
                        </>
                    })
                }
               
                
                
              
                <div></div>
            </div>
            <div style={{
                width: 200,
                display: "flex"
            }}>

                <Button style={{ marginTop: "auto", marginBottom: "auto" }} title={`Go to ${props.data?.name}`} />
            </div>
        </div>
    </>
}


