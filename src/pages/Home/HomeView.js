// @flow
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {css} from "aphrodite"
import styles from "./HomeStyles"
import './HomeStyles.scss'
import { WebFooter, WebHeader, Button, Card1, Card2, Card3, SideDrawer, Backdrop } from '../../components';
import {country} from "../../constants/country";
import Marquee from "react-fast-marquee";
import GH from '../../assets/images/GH/GH.png'
import NG from '../../assets/images/NG/NG.png'
import UK from '../../assets/images/UK/UK.png'
import US from '../../assets/images/US/US.png'
import Chart from '../../assets/images/Chart/Chart.png'
import Angle from '../../assets/images/Angle/Angle.png'
import Img1 from '../../assets/images/Img1/Img1.png'
import Img2 from '../../assets/images/Img2/Img2.png'
import Img3 from '../../assets/images/Img3/Img3.png'
import Img4 from '../../assets/images/Img4/Img4.png'
import Img5 from '../../assets/images/Img5/Img5.png'
import Img6 from '../../assets/images/Img6/Img6.png'
import Img7 from '../../assets/images/Img7/Img7.png'
import Img8 from '../../assets/images/Img8/Img8.png'
import Img9 from '../../assets/images/Img9/Img9.png'
import Img10 from '../../assets/images/Img10/Img10.png'
import usercenter from '../../assets/images/usercenter.svg';
import reognition from '../../assets/images/recognition.svg';
import db from '../../assets/images/db.svg';
import research from '../../assets/images/research.svg';
import Img12 from '../../assets/images/Img12/Img12.png'
import Img13 from '../../assets/images/Img13/Img13.png'
import Img14 from '../../assets/images/Img14/Img14.png'
import Img15 from '../../assets/images/Img15/Img15.png'
import Img16 from '../../assets/images/Img16/Img16.png'
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants';

export default function HomeView() {
    const history=useHistory();
    const defaultCountry=["US", "GB","NG"];
    const[sideToggle, setSideToggle] = useState(false);
    const [from, setFrom] = useState("GB");
    const [to, setTo] = useState("NG");
    const [sendCountries, setSendCountries] = useState(defaultCountry)
    const [send, setSend] = useState("GB");
    const [convert, setConvert] = useState("NG");
    const [amount, setAmount] = useState(100);
    const [convertCountries, setConvertCountries] = useState(defaultCountry);
   
    const navigateToCompare=()=>{
        
        history.push(ROUTES.COMPARE+`/${from.toLowerCase()}/${to.toLowerCase()}/${pas(send).toLowerCase()}/${pas(convert).toLowerCase()}/${amount}`)
    }
    const navigateToCompare2=(addr)=>{
        
        history.push(ROUTES.COMPARE+addr)
    }
    const updateText=(e)=>{
        let word=Number(e.target.value)||0;
        if(word>=0){
            setAmount(word)
        }
    }
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
      
  return (
    <div className="home">
        <WebHeader show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>        
        <SideDrawer show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>
        <Backdrop show={sideToggle}  click={()=>setSideToggle(!sideToggle)}/>

        <div className={css(styles.hero)}>
            <div className={css(styles.banner)}>
                <div className={css(styles.text)}>
                    <h5 className={css(styles.h5)}>Compare money transfer across the world in real time</h5>
                    <p className={css(styles.p)}>Save on fees, obtain the best exchange rates and find the cheapest transfer provider with our real-time comparsion engine.</p>
                </div>
                <div className={css(styles.compare)}>
                    <div className={css(styles.compareWrapper)}>
                        <div className={css(styles.inputBox)}>
                            <label>Country from</label>
                            <ReactFlagsSelect
                                fullWidth={false}
                                searchable
                                selected={from}
                                onSelect={(code) => selectCountryFrom(code)}
                                />
                        </div>
                        <span className={css(styles.divider)}></span>
                        <div className={css(styles.inputBox)}>
                            <label>Country to</label>
                            <ReactFlagsSelect
                                fullWidth={false}
                                searchable
                                selected={to}
                                onSelect={(code) => selectCountryTo(code)}
                                />
                        </div>
                    </div>
                    <div>
                        <div className={css(styles.compareBox)}>
                        
                            <div className={css(styles.compareCon)}>
                            <label>You send</label>
                            <div style={{display:"flex", border:"thin solid rgba(77, 77, 77, 0.3)"}}>
                            <div className={css(styles.compareInput)}>
                                    
                                    <input onChange={(e)=>{updateText(e)}} value={amount} placeholder="100" type="text" className={css(styles.input)} />
                                </div>
                                <div>
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
                            <div className={css(styles.compareBtn)}>
                                <Button click={()=>navigateToCompare()}  title="Compare rate" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={css(styles.marquee)}>
            <Marquee>
            * Exchange rate today: USD - 1.19 EURO - 1.19 Pounds - 1.19
            * Exchange rate today: USD - 1.19 EURO - 1.19 Pounds - 1.19
            * Exchange rate today: USD - 1.19 EURO - 1.19 Pounds - 1.19
            * Exchange rate today: USD - 1.19 EURO - 1.19 Pounds - 1.19
            </Marquee>
        </div>
        <div className={css(styles.exchangeCon)}>
            <h5 className={css(styles.exHead)}>Live Exchange Rate</h5>
            <div className={css(styles.table)}>
                <div className="table">
                    <div className="table-row">
                        <div className="table-head"></div>
                        <div className="table-head">Amount</div>
                        <div className="table-head">Charge</div>
                        <div className="table-head">Chart</div>
                        <div className="table-head"></div>
                    </div>
                    <div className="table-row currency">
                        <div className="table-head">US Dollar</div>
                        <div className="table-head">1</div>
                        <div className="table-head"></div>
                        <div className="table-head"></div>
                        <div className="table-head"></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell cur">
                            <img src={GH} className="curImg" />
                            <p>Ghana-<span className="curr">Cedis</span></p>
                        </div>
                        <div className="table-cell"><span>11.49</span></div>
                        <div className="table-cell"><span className="charge">-20.00</span></div>
                        <div className="table-cell">
                            <span><img src={Chart} /></span>
                        </div>
                        <div class="table-cell"><span><Button click={()=>navigateToCompare2("/us/gh/usd/ghs/100")} title="Send" /></span></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell cur">
                            <img src={NG} className="curImg" />
                            <p>Nigeria-<span className="curr">Naira</span></p>
                        </div>
                        <div className="table-cell"><span>740.00</span></div>
                        <div className="table-cell"><span className="charge">-36.00</span></div>
                        <div className="table-cell">
                            <span><img src={Chart} /></span>
                        </div>
                        <div className="table-cell"><span><Button click={()=>navigateToCompare2("/us/ng/usd/ngn/100")}  title="Send" /></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={css(styles.exchange)}>
            <div className={css(styles.subexchange)}>
                <h5 className={css(styles.exHead)}>We’re here to help you find the best way to send money to 154 countries</h5>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                        <div className='cur'>
                            <img src={GH} className="curImg" />
                            <p>Ghana - <span className="curr">Cedis</span></p>
                        </div>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <p><Link to={ROUTES.COMPARE+`/gh/us/ghs/usd/100`} className={css(styles.accordionText)}>Send money to USA</Link></p>
                        <p><Link to={ROUTES.COMPARE+`/gh/it/ghs/eur/100`} className={css(styles.accordionText)}>Send money to Italy</Link></p>
                        <p><Link to={ROUTES.COMPARE+`/gh/ca/ghs/cad/100`} className={css(styles.accordionText)}>Send money to Canada</Link></p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                        <div className='cur'>
                            <img src={NG} className="curImg" />
                            <p>Nigeria - <span className="curr">Naira</span></p>
                        </div>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <p><Link to={ROUTES.COMPARE+`/ng/us/ngn/usd/100`} className={css(styles.accordionText)}>Send money to USA</Link></p>
                        <p><Link to={ROUTES.COMPARE+`/ng/us/ngn/usd/100`} className={css(styles.accordionText)}>Send money to Italy</Link></p>
                        <p><Link to={ROUTES.COMPARE+`/ng/us/ngn/usd/100`} className={css(styles.accordionText)}>Send money to Canada</Link></p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                        <div className='cur'>
                            <img src={UK} className="curImg" />
                            <p>UK - <span className="curr">Pound</span></p>
                        </div>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <p ><Link to={ROUTES.COMPARE+`/gb/us/gbp/usd/100`} className={css(styles.accordionText)}>Send money to USA</Link></p>
                        <p><Link to={ROUTES.COMPARE+`/gb/it/gbp/eur/100`} className={css(styles.accordionText)}>Send money to Italy</Link></p>
                        <p><Link to={ROUTES.COMPARE+`/gb/ca/gbp/cad/100`} className={css(styles.accordionText)}>Send money to Canada</Link></p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className={css(styles.exchange)}>
            <h5 className={css(styles.exHead)}>Keep an Eye on the Exchange Rates and Set up Smart Alerts</h5>
            <div className={css(styles.table)}>
                <div className="table">
                    <div className="table-row">
                        <div className="table-head"></div>
                        <div className="table-head cur">
                            <img src={US} className="curImg" />
                            <p>US - <span className="curr">Dollar</span></p>
                        </div>
                        <div className="table-head">
                            <div className='cur'>
                                <img src={UK} className="curImg" />
                                <p>UK - <span className="curr">Pound</span></p>
                            </div>
                        </div>
                        <div className="table-head">
                            <div className='cur'>
                                <img src={US} className="curImg" />
                                <p>US-<span className="curr">Dollar</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell cur">
                            <img src={GH} className="curImg" />
                            <p>Ghana-<span className="curr">Cedis</span></p>
                        </div>
                        <div className="table-cell">11.40</div>
                        <div className="table-cell">9.50</div>
                        <div className="table-cell">11.40</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell cur">
                            <img src={NG} className="curImg" />
                            <p>Nigeria-<span className="curr">Naira</span></p>
                        </div>
                        <div className="table-cell">740.00</div>
                        <div className="table-cell">860.50</div>
                        <div className="table-cell">740.00</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell cur">
                            <img src={GH} className="curImg" />
                            <p>Ghana-<span className="curr">Cedis</span></p>
                        </div>
                        <div className="table-cell">11.40</div>
                        <div className="table-cell">9.50</div>
                        <div className="table-cell">11.40</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell cur">
                            <img src={NG} className="curImg" />
                            <p>Nigeria-<span className="curr">Naira</span></p>
                        </div>
                        <div className="table-cell">740.00</div>
                        <div className="table-cell">860.50</div>
                        <div className="table-cell">740.00</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={css(styles.box)}>
            <h5 className={css(styles.boxHead)}>Find the best way to transfer money abroad.</h5>
            <h6 className={css(styles.boxSubHead)}>Search for money transfers online</h6>
            <div className={css(styles.contentBox)}>
                <div className={css(styles.boxtext)}>
                    <div className={css(styles.content)}>Our comparison engine is trusted by more than 2 million users world-wide.</div>
                    <div className={css(styles.angle)}><img src={Angle} /></div>
                    <div className={css(styles.content)}>We only recommend regulated and secure companies</div>
                    <div className={css(styles.angle)}><img src={Angle} /></div>
                    <div className={css(styles.content)}>Save up to 90% by choosing the cheapest provider today.</div>
                </div>
            </div>
        </div>
        <div className={css(styles.boxWrapper)}>
            <div className={css(styles.box1)}>
                <img src={Img1} className={css(styles.Img1)} />
                <div className={css(styles.boxCon)}>
                    <h4 className={css(styles.boxHead)}>Compare and Transfer your money anytime, anywhere in the world</h4>
                    <p className={css(styles.boxContent)}>You could save a lot of money by comparing exchange rates and transfer fees in real-time. 
                        With our money transfer comparison tool, you’ll find the best way to send money 
                        internationally using our best and trusted provider in just a few clicks.
                    </p>
                    <div className={css(styles.button)}>
                        <Button click={()=>navigateToCompare()} title="Compare cash transfer" />
                    </div>                   
                </div>
            </div>
        </div>
        <div className={css(styles.box1Wrapper)}>
            <div className={css(styles.box1Box)}>
                <div className={css(styles.box1Con)}>
                    <h5 className={css(styles.review)}>Our Review</h5>
                    <div className={css(styles.box1Content)}>
                        <h4 className={css(styles.best)}>Best Providers</h4>
                        <p className={css(styles.boxContent)}>We compare and review over 200 money transfer companies. 
                            We review money transfer giants and well-known brands like Western 
                            Union or MoneyGram to rapidly growing new players like TransferWise 
                            and many more. We also compare niche providers that are good solutions 
                            for very specific needs, as well as banks to give you an idea of how much 
                            you can save by switching to a cheaper provider.
                        </p>
                    </div>
                    <div className={css(styles.button)}>
                        <Button title="See all providers" />
                    </div>
                </div>
                <div className={css(styles.grid)}>
                    <img src={Img2} className={css(styles.provider)} />
                    <img src={Img3} className={css(styles.provider)} />
                    <img src={Img4} className={css(styles.provider)} />
                    <img src={Img5} className={css(styles.provider)} />
                    <img src={Img6} className={css(styles.provider)} />
                    <img src={Img7} className={css(styles.provider)} />
                    <img src={Img8} className={css(styles.provider)} />
                    <img src={Img9} className={css(styles.provider)} />
                    <img src={Img10} className={css(styles.provider)} />
                </div>
            </div>
        </div>
        <div className={css(styles.box2Wrapper)}>
            <h5 className={css(styles.feature)}>Our Core Features</h5>
            <h6 className={css(styles.featText)}>This is why crygoca is the best way to transfer money abroad.</h6>
            <div className={css(styles.cardWrapper)}>
                <Card1
                    img={research}
                    name="RESEARCH"
                    text="Crygoca’s experts spend hours researching money transfer services." />
                <Card1
                    img={db}
                    name="LARGE DATABASE"
                    text="We have one of the largest databases of money transfer prices worldwide" />
                <Card1
                    img={reognition}
                    name="RECOGNITION"
                    text="Crygoca’s opinion is trusted by recognized media & governments" />
                <Card1
                    img={usercenter}
                    name="USER CENTER"
                    text="Crygoca’s value puts our users' need at the center of everything we do" />
            </div>
            <div className={css(styles.cardButton)}>
                <Button title="Learn more about us" />
            </div>
        </div>
        <div>
            <h5 className={css(styles.card2Head)}>How it works</h5> 
            <h6 className={css(styles.boxSubHead)}>Manage Payments In 3 Easy Steps</h6>
            <div className={css(styles.cardWrapper)}>
                <Card2
                    name="1"
                    text="Choose where to send money and amount" />
                <Card2
                    name="2"
                    text="Choose the best provider from our top list" />
                <Card2
                    name="3"
                    text="Choose the best provider from our top list" />
            </div>
        </div>
        <div className={css(styles.exchange)}>
            <h5 className={css(styles.card2Head)}>Frequently Asked Questions</h5> 
            <h6 className={css(styles.boxSubHead)}>Important questions</h6>
            <div className={css(styles.subexchange)}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How can I use Crygoca to find the best ways to sendmoney?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>Before you make an international money transfer, compare the costs of the different options on Crygoca. Rates and fees  change often, so for the best deal, do a comparison before every transfer — they may have changed since you last sent money. 
    Once you enter the details about where you are sending money from and to, click on compare.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How can I use Crygoca to find the best ways to sendmoney?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>Before you make an international money transfer, compare the costs of the different options on Crygoca. Rates and fees  change often, so for the best deal, do a comparison before every transfer — they may have changed since you last sent money. 
    Once you enter the details about where you are sending money from and to, click on compare.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How can I use Crygoca to find the best ways to sendmoney?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>Before you make an international money transfer, compare the costs of the different options on Crygoca. Rates and fees  change often, so for the best deal, do a comparison before every transfer — they may have changed since you last sent money. 
    Once you enter the details about where you are sending money from and to, click on compare.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How can I use Crygoca to find the best ways to sendmoney?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>Before you make an international money transfer, compare the costs of the different options on Crygoca. Rates and fees  change often, so for the best deal, do a comparison before every transfer — they may have changed since you last sent money. 
    Once you enter the details about where you are sending money from and to, click on compare.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How can I use Crygoca to find the best ways to sendmoney?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>Before you make an international money transfer, compare the costs of the different options on Crygoca. Rates and fees  change often, so for the best deal, do a comparison before every transfer — they may have changed since you last sent money. 
    Once you enter the details about where you are sending money from and to, click on compare.</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className={css(styles.exchange)}>
            <h5 className={css(styles.card2Head)}>Our Blog Post</h5> 
            <h6 className={css(styles.boxSubHead)}>Related tips and tricks on money transfer</h6>
            <div className={css(styles.cardWrapper2)}>
                <Card3
                    img={Img12}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="Find the Fastest Way to Send Money Abroad"
                    text="Before you make an international money transfer, compare the... " />
                <Card3
                    img={Img13}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="Find the Fastest Way to Send Money Abroad"
                    text="Before you make an international money transfer, compare the... " />
                <Card3
                    img={Img14}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="Western Union vs MoneyGram"
                    text="Before you make an international money transfer, compare the... " />
                <Card3
                    img={Img15}
                    img2={Img16}
                    name="Sharon"
                    date="7/12/2022"
                    heading="The UK's Best Three Challenger Banks of 2021"
                    text="Before you make an international money transfer, compare the... " />
            </div>
        </div>
        <WebFooter />
    </div>
  );
}
