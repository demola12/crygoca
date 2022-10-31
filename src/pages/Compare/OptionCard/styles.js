import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

    container:{
        border: "2px solid #DB9406",
        position: "relative",
        height: "100%",
        width: "100%",
        borderRadius:25,
        backgroundColor:"",
        overflow:"hidden"
    },
    
    innerTriangle:{
        borderLeft: "111px solid transparent",
        borderRight: "111px solid green",
        borderBottom: "111px solid transparent",
        height: 0,
        width: 0,
        position: "absolute",
        right: "0px",
        zIndex: 2,
        color:"white",
        fontSize:18,
    },
  text:{
    transform: "rotate(45deg)",
    color:"white",
    marginLeft:40,
    fontSize:18
  }

});