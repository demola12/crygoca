import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    cardCon: {
        width: "280px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        borderRadius: "20px"
    },
    imgBox: {
        width: "286px",
        height: "352px",
        position: "relative"
    },
    img: {
        width: "100%",
        height: "100%",
        position: "absolute"
    },
    innnerCon: {
        position: "absolute",
        bottom: "33px",
        left: "40px",
        background: "#fff",
        width: "207px",
        height: "44px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 8px"

    },
    InnerImg: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    },
    h5: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "15px",
        color: "#0A0A0A",
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        color: "#828282",
    }
});