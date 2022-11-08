import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

    container:{
        background: "#FFFFFF",
        boxShadow: "0px 2px 50px 4px rgba(0, 0, 0, 0.05)",
        borderRadius: "25px",
        display:"flex",
        width:"100%",
        justifyContent: 'space-between',
        padding:"20px",
        gap:"20px",
        height:"max-content",
        maxWidth:"890px",
        margin:"10px auto"
    },
    logo:{
        width:200,
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        backgroundColor:"#FEFCF7",
        padding:"30px 40px 30px  20px",
        border: "1px solid #DB9406",
        borderRadius:"25px"
    }
    ,row:{
        display:"flex",
        gap:15
        
        
    },col:{
        display:"flex",
        flexDirection:"column"


    },
    first:{
        width:120
    },
    flex:{
        flex:1
    },
    titleFont:{
        fontFamily: "Roboto",
        fontStyle: "Regular",
        fontSize: "15px",
        color:"#828282",
        height:30
    }
, mainFont:{
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "15px",
    color:"#0A0A0A",
    alignItems:"center",
    height:50
}
});