import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

backdrop:{
    width:'100%',
    height:'100vh',
    background:'#ccd5e786',
    zIndex:100,
    position:'fixed',
    transition:'all 0.3sec ease-out',
    top:0,
    left:0,
    '@media(min-width:1051px)':{
        display:'none'
    }
}

});