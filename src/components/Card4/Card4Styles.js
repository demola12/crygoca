import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    cardCon: {
        background: "#fff",
        width: "397px",
        height: "416px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "20px",
        boxShadow: "-10px -10px",
        padding: "50px"
    },
    h5: {
        color: "#0A0A0A",
        fontWeight: "600",
        fontSize: "15px"
    },
    num: {
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        background: "#DB9406",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "400",
        fontSize: "15px",
        color: "#0A0A0A",
    }
});