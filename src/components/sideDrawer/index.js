import './Styles.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants';
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";


const Sidedrawer = ({ show, click }) => {
    const [selected, setSelected] = useState("GB");
    const sideDrawerClass = ["sidedrawer"]
    if (show) {
        sideDrawerClass.push("show")
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" >
                <li onClick={click}>
                    <Link to={ROUTES.HOME}>Money Transfer</Link>
                </li>
                <li onClick={click}>
                    <Link to={ROUTES.ABOUT} >About us</Link>
                </li>
                <li onClick={click}>
                    <Link to={ROUTES.BLOG}>Blog</Link>
                </li>
                <li>
                    <ReactFlagsSelect
                        countries={["GB", "FR", "IT"]}
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        selectButtonClassName="menu-flag-button"
                        />
                </li>
            </ul>
        </div>
    )
}

export default Sidedrawer
