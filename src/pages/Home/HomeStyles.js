import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    hero: {
        width: "100%",
        height: "100%",
    },
    banner: {
        background: "linear-gradient(183.58deg, #003366 2.85%, #003366 43.66%, #DB9406 97.06%)",
        height: "500px",
        maxWidth: "90%",
        margin: "50px auto",
        borderRadius: "20px",
        position: "relative",
    },
    text: {
        margin: "auto",
        color: "#fff",
        maxWidth: "800px",
        padding: "15px"
    },
    h5: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "48px",
        lineHeight: "56px",
        textAlign: "center",
        marginTop: "40px",
        marginBottom: "30px",
        '@media(max-width:892px)':{
            fontSize: "30px",
            lineHeight: "28px",
        },
    },
    p: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "23px",
        textAlign: "center",
    },
    compare: {
        background:'#fff',
        width:'800px',
        minHeight:'230px',
        margin:'-10vh auto 0 auto',
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
    marquee: {
        marginTop: "10%",
        background: "#3E76BA",
        width: "100%",
        color: "#fff",
        position: "relative",
        '@media(max-width:768px)':{
            display: "none"            
        },
    },
    exchangeCon: {
        width: "100%",
        margin: "100px auto",
        background: "fbfbfb",
        '@media(max-width:768px)':{
            marginTop: "300px",            
        },  
    },
    exchange: {
        width: "100%",
        margin: "100px auto",
        background: "fbfbfb",
    },
    exHead: {
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
        color: "#003366",
        textAlign: "center",
        margin: "50px auto",
        maxWidth: "650px",
        '@media(max-width:768px)':{
            fontSize: "26px",
            marginBottom: "30px"          
        },
    },
    table: {
        '@media(max-width:768px)':{
            overflowX: "auto"         
        },
    },
    subexchange: {
        maxWidth: "80%",
        margin: "auto",
        '@media(max-width:768px)':{
            maxWidth: "90%"
        },
    },
    box: {
        width: "100%",
        
    },
    boxHead: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
        textAlign: "center",
        color: "#0A0A0A",
    },
    boxSubHead: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "38px",
        textAlign: "center",
        color: "#0A0A0A",
        marginBottom: "50px"
    },
    contentBox: {
        borderTop: "1px solid #DB9406",
        borderBottom: "1px solid #DB9406",
        background: "#FEFCF7"
    },
    boxtext: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1100px",
        margin: "auto",
        padding: "50px",
        '@media(max-width:768px)':{
            flexDirection: "column",
            padding: "20px"      
        },
    },
    angle: {
        '@media(max-width:768px)':{
            transform: "rotate(90deg)"        
        },
    },
    content: {
        maxWidth: "250px"
    },
    boxWrapper: {
        background: "#FEFCF7",
        margin: "100px 0",
        padding: "20px 0",
        '@media(max-width:768px)':{
            background: "#fff",    
        },
    },
    box1: {
        margin: "auto",
        maxWidth: "80%",
        display: "flex",
        alignItems: "center",
        gap: "50px",
        '@media(max-width:768px)':{
            flexDirection: "column",
            maxWidth: "90%"
        },
    },
    Img1: {
        width: "350px",
        '@media(max-width:768px)':{
            width: "100%"
        },
    },
    boxCon: {
        maxWidth: "636px"
    },
    boxContent: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "22px",
        color: "#0A0A0A",
        margin: "30px 0"
    },
    button: {
        width: "300px",
        '@media(max-width:768px)':{
            width: "100%"
        },
    },
    box1Wrapper: {
        width: "100%"
    },
    box1Box: {
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        '@media(max-width:900px)':{
            flexDirection: "column",
            gap: "50px",
            width: "90%"
        },
    },
    box1Con: {
        flexBasis: "40%"
    },
    review: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
        color: "#0A0A0A",
    },
    box1Content: {
        paddingRight: "20px",
        borderRight: "7px solid #db9406",
        '@media(max-width:768px)':{
            borderRight: "none"
        },
    },
    best: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
        color: "#0A0A0A",
        margin: "30px 0"
    },
    grid: {
        flexBasis: "40%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        border: "1px solid #DB9406",
        padding: "30px",
        borderRadius: "40px",
        background: "#FEFCF7",
    },
    provider: {
        '@media(max-width:400px)':{
            width: "70px"
        },
    },
    box2Wrapper: {
        background: "#003366",
        borderRadius: "40px",
        maxWidth: "80%",
        margin: "80px auto",
        '@media(max-width:768px)':{
            borderRadius: "0px",
            maxWidth: "90%",            
        },
    },
    feature: {
        textAlign: "center",
        color: "#fff",
        paddingTop: "50px",
        paddingBottom: "20px",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
    },
    featText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "18px",
        marginBottom: "60px",
        lineHeight: "21px",
    },
    cardWrapper: {
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "80%",
        margin: "auto",
        gap: "15px",
        '@media(max-width:1110px)':{
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "90%"
        },
    },
    cardButton: {
        width: "300px",
        margin: "50px auto",
        paddingBottom: "50px"
    },
    card2Head: {
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
        color: "#003366",
        textAlign: "center",
        marginTop: "50px",
    },
    cardWrapper2: {
        maxWidth: "80%",
        margin: "auto",
        display: "flex",
        gap: "26px",
        '@media(max-width:1200px)':{
            flexWrap: "wrap",
            justifyContent: "center"
        },
    }
});