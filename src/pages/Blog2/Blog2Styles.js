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
    imgCon: {
        maxWidth: "90%",
        margin: "45px auto 60px",
    },
    img: {
        width: "100%",
        maxHeight: "300px",
        objectFit: "cover",
        borderRadius: "40px"
    },
    date: {
        display: "flex",
        gap: "55px",
        marginTop: "80px",
        marginBottom: "50px"
    },
    user: {
        display: "flex",
        gap: "12px"
    },
    p: {
        color: "#828282"
    },
    title: {
        fontWeight: "600",
        fontSize: "18px",
        color: "#0A0A0A",
        marginBottom: "30px"
    },
    link: {
        color: "#DB9406",
        fontSize: "15px",
        lineHeight: "22px"
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