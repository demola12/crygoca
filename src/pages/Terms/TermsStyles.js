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
        display: "flex",
        alignItems: "center",
        gap: "45px",
        ':nth-child(odd)': {
            flexDirection: "row-reverse",
            justifyContent: "space-between"
        },
        '@media(max-width:970px)':{
            flexDirection: "column",
            ':nth-child(odd)': {
                flexDirection: "column"
            },
        },        
    },
    textCon: {
        maxWidth: "600px"
    },
    textHead: {
        fontFamily: 'Roboto',
        fontWeight: "700",
        fontSize: "32px",
        color: "#0A0A0A",
    },
});