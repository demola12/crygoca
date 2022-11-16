import { css } from 'aphrodite'
import styles from './Styles'
import ReactFlagsSelect from "react-flags-select";
import Button from "../Button"
import {country} from "../../constants/country";
import { useEffect, useState } from 'react';
import { getAllByPlaceholderText } from '@testing-library/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants';
export default function (props) {
    let history=useHistory();
    const defaultCountry=["US", "GB","NG"];
    const currencyCodeToCountry=(code)=>{
        return country.filter(v=>v.currencyCode==code)[0]?.countryCode
    }
    const [from, setFrom] = useState(props.data.from.toUpperCase());
    const [to, setTo] = useState(props.data.to.toUpperCase());
    const [send, setSend] = useState(currencyCodeToCountry(props.data.send.toUpperCase()));
    const [sendCountries, setSendCountries] = useState(defaultCountry)
    const [convert, setConvert] = useState(currencyCodeToCountry(props.data.convert.toUpperCase()));
    const [convertCountries, setConvertCountries] = useState(defaultCountry);
    const [amount, setAmount] = useState(Number(props.data.amount)||0);
    
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
    const updateText=(e)=>{
        let word=Number(e.target.value)||0;
        if(word>=0){
            setAmount(word)
        }
    }
    const fetchData=async()=>{
        if(Number(amount)>0){
            props.loader(true)
            props.result([])
            props.filter([])
            let response=await axios.get(`https://be.crygoca.co.uk/index.php/v1/get_rate/${from.toLowerCase()}/${to.toLowerCase()}/${pas(send).toLowerCase()}/${pas(convert).toLowerCase()}/${amount}`)
            props.result(response.data.data)
            props.filter(response.data.filter)
            props.loader(false)
        }
    }
    const getRate=()=>{
        history.push(ROUTES.COMPARE+`/${from.toLowerCase()}/${to.toLowerCase()}/${pas(send).toLowerCase()}/${pas(convert).toLowerCase()}/${amount}`)
       
        
    }
    useEffect(() => {
        fetchData()
      },[props.data.from,props.data.to,props.data.send,props.data.convert,props.data.amount]);
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
                                display:"flex",
                                border:"thin solid rgba(77, 77, 77, 0.3)"

                            }}>
                            <input value={amount} placeholder='1000' type="text" onChange={(e)=>{updateText(e)}} className={css(styles.input)} />
                            <ReactFlagsSelect
                                countries={sendCountries}
                                fullWidth={false}
                                selected={send}
                                customLabels={convertCountriesLabel(sendCountries)}
                                onSelect={(code) => setSend(code)}
                                className="menu-flags border-none"
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


