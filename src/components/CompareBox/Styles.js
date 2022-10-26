import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

    compare: {
        background:'#fff',
        width:'800px',
        minHeight:'230px',
        margin:'0 auto 0 auto',
        padding: "35px",
        borderRadius:'8px',
        position:'absolute',
        left: "50%",
        bottom: "-40%",
        transform: "translate(-50%, -50%)",

        boxShadow:'0px 2px 37px rgba(0, 0, 0, 0.1);',
        '@media(max-width:1005px)':{
            MaxWidth:'850px',
        },
        '@media(max-width:892px)':{
            marginTop:'-15vh',
            maxWidth:'700px',
            padding: "10px",
            zIndex:200
        },
        '@media(max-width:780px)':{
            width:'90%',
        },
        '@media(max-width:768px)':{
            bottom: "-90%",            
        },
        '@media(max-width:400px)':{
            bottom: "-100%",            
        },
    },
    compareWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        borderBottom: "1px solid #D7D7D7",
    },
    inputBox: {
        minWidth: "270px",
        '@media(max-width:768px)':{
            width: "100%",
            minWidth: "0px"
        },
    },
    divider: {
        width: "1px",
        height: "100px",
        background: "#D7D7D7",
        '@media(max-width:768px)':{
            display: "none"
        },
    },
    compareBox: {
        display: "flex",
        alignItems: "end",
        paddingTop: "20px",
        gap: "30px",
        '@media(max-width:768px)':{
            flexDirection: "column",
            gap: "10px"
        },

    },
    input: {
        cursor: "pointer",
        padding: "5px 10px",
        border: "thin solid rgba(77, 77, 77, 0.3)",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        color: "#4d4d4d",
        borderRight: "none",
        background: "transparent",
        fontSize: "16px",
        height: "41px",
        width: "165px",
        '@media(max-width:768px)':{
            width: "100%"
        },
    },
    compareCon: {
        display: "flex",
        alignItems: "end",
        '@media(max-width:768px)':{
            width: "100%",
        },
    },
    compareInput: {
        '@media(max-width:768px)':{
            width: "100%"
        },
    },
    compareBtn: {
        width: "300px",
        '@media(max-width:768px)':{
            width: "100%",
            marginTop: "20px"
        },
    },

});