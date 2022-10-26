import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    cardCon: {
        background: "#fff",
        width: "380px",
        height: "252px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        borderRadius: "20px",
        boxShadow: "-10px -10px"
    },
    num: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#DB9406",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        textAlign: "center",
        color: "#0A0A0A",
    }
});