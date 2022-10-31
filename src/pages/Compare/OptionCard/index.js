import { css } from 'aphrodite'
import styles from './styles'
import { useState } from 'react';
export default function () {
    
    return <>

        <div className={css(styles.container)}>
            <div className={css(styles.innerTriangle)}>
                <p className={css(styles.text)} >
                Popular
            </p>
       
        </div>
        </div>
    </>
}


