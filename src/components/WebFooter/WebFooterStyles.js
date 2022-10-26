import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    footer: {
        // background: "#212121",        
        // color: "#0A0A0A",
        width: "100%",
        height: "auto",
    },
    footerBox: {
        display:'grid',
        gridTemplateColumns:'auto auto auto',
        padding: "60px 0 64px 99px",
        '@media(max-width:900px)':{
            gridTemplateColumns:'100%',
            padding:'20px'
        }
    },
    footerContent: {
        maxWidth: "380px",
        color: "#0A0A0A",
        '@media(max-width:900px)':{
            maxWidth:'unset',
            width:'90%',
            margin:'20px auto',
            display:'flex',
            flexDirection:'column',
            alignItems:'left'
        }
    },
    footerHead: {
        color: "#DB9406",
        fontWeight: "900",
        marginBottom: "12px",
        fontSize: "25px",
    },
    media: {
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "33px",
        color: "#DB9406",
        marginBottom: "32px",
        '@media(max-width:900px)':{
           textAlign:'left'
        }
    },
    li: {
        marginBottom: "20px",
        fontFamily: 'Prompt',
        fontSize: "15px",
        lineHeight: "23px",
        color: "#0A0A0A",
        fontWeight: "400",
    },
    link: {
        color: "#0A0A0A",
    },
    social: {
        marginRight: "10px"
    }
});