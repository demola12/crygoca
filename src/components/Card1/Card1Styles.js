import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    cardCon: {
        background: "#fff",
        width: "280px",
        height: "290px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        borderRadius: "20px"
    },
    img: {
        width: "50px"
    },
    h5: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "20px",
        textAlign: "center"
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