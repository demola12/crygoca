import { css } from 'aphrodite'
import styles from './styles'
import { Button } from '../../../components';

import { useState } from 'react';
export default function () {

    return <>

        <div className={css(styles.container)}>

            <div>
                <img src="" />
                <p>Money Gram</p>
                <div>Popular</div>
            </div>
            <div>
                <div><div>Transfer Time</div><div>Pay By</div><div>Rececipient gets</div></div>
                <div></div>
            </div>
            <div>
                <Button title="Search" />
            </div>
        </div>
    </>
}


