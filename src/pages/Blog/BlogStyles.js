import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    head: {
        background: "#003366",
        borderRadius: "40px",
        height: "238px",
        maxWidth: "90%",
        margin: "45px auto 60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    h5: {
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
        color: "#FFFFFF",
    },
    con: {
        maxWidth: "90%",
        margin: "45px auto 60px", 
    },
    cardWrapper2: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "26px",
        '@media(max-width:1200px)':{
            flexWrap: "wrap",
            justifyContent: "center"
        },
    }
});