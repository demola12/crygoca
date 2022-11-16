import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

    compare: {
        background:'#fff',
        height:'190px',
        padding: "35px",
        borderRadius:'8px',
        width:"max-content",
        boxShadow:'0px 2px 37px rgba(0, 0, 0, 0.1);',
    },
    compareWrapper: {
        display: "flex",
        gap:"20px",
    },
    inputBox: {
        minWidth: "170px",
        '@media(max-width:768px)':{
            width: "100%",
            minWidth: "0px"
        },
    },
    divider: {
        width: "1px",
        height: "41px",
        background: "#D7D7D7",
        marginTop:"auto",
        '@media(max-width:768px)':{
            display: "none"
        },
    },
    compareBox: {
        display: "flex",
        alignItems: "end",
        paddingTop: "20px",
        justifyContent:"center"

    },
    input: {
        cursor: "pointer",
        padding: "5px 10px",
       border: "none",
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
        width: "270px",
        '@media(max-width:768px)':{
            width: "100%",
            marginTop: "20px"
        },
    },

});