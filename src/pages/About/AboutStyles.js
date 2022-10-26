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
    subHead: {
        maxWidth: "90%",
        margin: "0 auto 80px",
    },
    subHead2: {
        maxWidth: "90%",
        margin: "45px auto 60px",
        display: "flex",
        alignItems: "center",
        gap: "50px",
        '@media(max-width:850px)':{
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "90%"
        },
    },
    subHead2Con: {
        maxWidth: "600px"
    },
    h4: {
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "38px",
        color: "#003366",
        marginBottom: "20px"
    },
    con: {
        maxWidth: "90%",
        margin: "45px auto 60px", 
    },
    cardWrapper: {
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        margin: "50px auto 0",
        gap: "30px",
        '@media(max-width:1110px)':{
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "90%"
        },
    }
});