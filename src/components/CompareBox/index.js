import { css } from 'aphrodite'
import styles from './Styles'
import ReactFlagsSelect from "react-flags-select";
import Button from "../Button"
import {country} from "../../constants/country";
import { useState } from 'react';
import { getAllByPlaceholderText } from '@testing-library/react';
import axios from 'axios';
export default function (props) {
    const defaultCountry=["US", "GB","NG"];
    const [from, setFrom] = useState("GB");
    const [to, setTo] = useState("NG");
    const [send, setSend] = useState("GB");
    const [sendCountries, setSendCountries] = useState(defaultCountry)
    const [convert, setConvert] = useState("NG");
    const [convertCountries, setConvertCountries] = useState(defaultCountry);
    const selectCountryFrom=(code)=>{
        if(!defaultCountry.includes(code)){
            let selectedCountry=country.filter(v=>v.countryCode==code);
            if(selectedCountry.length>0){
                setSendCountries([...defaultCountry,selectedCountry[0].countryCode])
                
               
            }
        }
        setSend(code)
        setFrom(code)
    }
    const convertCountriesLabel=(arrr)=>{
        let result={}
        arrr.forEach(i=>{
            let selectedCountry=country.filter(v=>v.countryCode==i);
            if(selectedCountry.length>0){
                result[i]=selectedCountry[0].currencyCode
            }
        })

return result

    }
    const pas=(code)=>{
        return country.filter(v=>v.countryCode==code)[0].currencyCode
    }
    const selectCountryTo=(code)=>{
        if(!defaultCountry.includes(code)){
            let selectedCountry=country.filter(v=>v.countryCode==code);
            if(selectedCountry.length>0){
                setConvertCountries([...defaultCountry,selectedCountry[0].countryCode])
                
               
            }
        }
        setConvert(code)
        setTo(code)
    }
    const getRate=async()=>{
        props.loader(true)
        props.result([])
        props.filter([])
        let response=await axios.get(`https://be.crygoca.co.uk/index.php/v1/get_rate/${from.toLowerCase()}/${to.toLowerCase()}/${pas(send).toLowerCase()}/${pas(convert).toLowerCase()}/1000`)
        props.result(response.data.data)
        props.filter(response.data.filter)
        props.loader(false)
    }
    return <>

        <div className={css(styles.compare)}>
            <div className={css(styles.compareWrapper)}>
                <div className={css(styles.inputBox)}>
                    <label>Country from</label>
                    <ReactFlagsSelect
                        //countries={["GH", "GB", "FR", "IT"]}
                        fullWidth={false}
                        searchable
                        selected={from}
                        onSelect={(code) => selectCountryFrom(code)}
                    />
                </div>
                <div className={css(styles.inputBox)}>
                    <label>Country to</label>
                    <ReactFlagsSelect
                        //countries={["US", "GB", "FR", "IT"]}
                        fullWidth={false}
                        selected={to}
                        searchable
                        onSelect={(code) => selectCountryTo(code)}
                    />
                </div>
                <div className={css(styles.divider)}></div>
                <div className={css(styles.compareCon)}>
                        <div className={css(styles.compareInput)}>
                            <label>You send</label>
                            <div style={{
                                display:"flex"
                            }}>
                            <input placeholder='1000' type="text" className={css(styles.input)} />
                            <ReactFlagsSelect
                                countries={sendCountries}
                                fullWidth={false}
                                selected={send}
                                customLabels={convertCountriesLabel(sendCountries)}
                                onSelect={(code) => setSend(code)}
                                className="menu-flags"
                                selectButtonClassName="menu-flags-button"
                            />
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className={css(styles.compareInput)}>
                        <label>To</label>
                        <ReactFlagsSelect
                            countries={convertCountries}
                            fullWidth={false}
                            selected={convert}
                            customLabels={convertCountriesLabel(convertCountries)}
                            onSelect={(code) => setConvert(code)}
                            className="menu-flag"
                        />
                    </div>
            </div>
            <div>
                <div className={css(styles.compareBox)}>
                    
                    <div className={css(styles.compareBtn)}>
                        <Button click={()=>getRate()} title="Search" />
                    </div>
                </div>
            </div>
        </div>
    </>
}


