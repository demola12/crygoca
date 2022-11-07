import { css } from 'aphrodite'
import styles from './styles'
import { Button } from '../../../components';
import monetgram from "../../../assets/images/monetgram.svg"

import { useState } from 'react';
export default function () {

    return <>

        <div className={css(styles.container)}>

            <div style={{
                width:200,
                display:"flex",
                flexDirection:"column",
                gap:"10px"
            }}>
                <img src={monetgram} />
                <p>Money Gram</p>
                <Button color={"#219653"} title="Popular" />
            </div>
            <div
            style={{
                flex: 1
            }}>
                <div style={{
                    display: "flex"
                }}><div>Transfer Time</div><div>Pay By</div><div>Rececipient gets</div></div>
                <div></div>
                <div style={{
                    display: "flex"
                }}><div>In minutes</div><div>Credit Card</div><div>904.08 GBP</div></div>
                <div style={{
                    display: "flex"
                }}><div>In minutes</div><div>Credit Card</div><div>904.08 GBP</div></div>
                <div style={{
                    display: "flex"
                }}><div>In minutes</div><div>Credit Card</div><div>904.08 GBP</div></div>
                <div></div>
            </div>
            <div style={{
                width:200,
                display:"flex"
            }}>

                <Button style={{marginTop:"auto",marginBottom:"auto"}} title="Search" />
            </div>
        </div>
    </>
}


