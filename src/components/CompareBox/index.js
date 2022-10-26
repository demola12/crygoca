import { css } from 'aphrodite'
import styles from './Styles'
import ReactFlagsSelect from "react-flags-select";
import Button from "../Button"
import { useState } from 'react';
export default function () {
    
    const [from, setFrom] = useState("GH");
    const [to, setTo] = useState("US");
    const [send, setSend] = useState("GH");
    const [convert, setConvert] = useState("US");
    return <>

        <div className={css(styles.compare)}>
            <div className={css(styles.compareWrapper)}>
                <div className={css(styles.inputBox)}>
                    <label>Country from</label>
                    <ReactFlagsSelect
                        countries={["GH", "GB", "FR", "IT"]}
                        fullWidth={false}
                        selected={from}
                        onSelect={(code) => setFrom(code)}
                    />
                </div>
                <span className={css(styles.divider)}></span>
                <div className={css(styles.inputBox)}>
                    <label>Country to</label>
                    <ReactFlagsSelect
                        countries={["US", "GB", "FR", "IT"]}
                        fullWidth={false}
                        selected={to}
                        onSelect={(code) => setTo(code)}
                    />
                </div>
            </div>
            <div>
                <div className={css(styles.compareBox)}>
                    <div className={css(styles.compareCon)}>
                        <div className={css(styles.compareInput)}>
                            <label>You send</label>
                            <input type="text" className={css(styles.input)} />
                        </div>
                        <div>
                            <ReactFlagsSelect
                                countries={["US", "GH", "GB", "FR", "NG"]}
                                fullWidth={false}
                                selected={send}
                                customLabels={{ US: "US", GB: "GB", FR: "FR", GH: "GH", NG: "NG" }}
                                onSelect={(code) => setSend(code)}
                                className="menu-flags"
                                selectButtonClassName="menu-flags-button"
                            />
                        </div>
                    </div>
                    <div className={css(styles.compareInput)}>
                        <label>To</label>
                        <ReactFlagsSelect
                            countries={["US", "GH", "GB", "FR", "NG"]}
                            fullWidth={false}
                            selected={convert}
                            customLabels={{ US: "USD", GB: "POUND", FR: "EURO", GH: "CEDI", NG: "NAIRA" }}
                            onSelect={(code) => setConvert(code)}
                            className="menu-flag"
                        />
                    </div>
                    <div className={css(styles.compareBtn)}>
                        <Button title="Compare rate" />
                    </div>
                </div>
            </div>
        </div>
    </>
}


