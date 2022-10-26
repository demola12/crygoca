import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    header: {
        background: '#DB9406',
        display: 'flex',
        justifyContent: 'space-between',
        padding:"10px 50px",
        height: '74px',
        '@media(max-width:1158px)':{
            padding:'10px 0'
        }
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        padding: "20px"
    },
    menu: {
        display: 'flex',
        alignItems:'center',
        '@media(max-width:1050px)':{
            display:'none'
        }
    },
    menulist: {
        margin: '0 20px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18px',
        color:'#FFFFFF',
    },
    hamburger:{
        display:'none',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        cursor:'pointer',
        transform:'scale(1.4em)',
        '@media(max-width:1050px)':{
            display:'flex'
        }
    },
});