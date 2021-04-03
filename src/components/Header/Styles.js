import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    },
    appbar:{
        background:"none"
    },
    icon:
    {
        color:"#fff",
        fontSize:"2rem"
    },
    title:
    {
        flexGrow:"1"
    },
    wrapper:
    {
        width:"80%",
        margin:"0 auto"
    },
    titleCenter:
    {
        fontSize:"5rem"
    },
    container:
    {
        textAlign:"center"
    },
    goDown:
    {
        fontSize:"4rem"
    }
}))

export default useStyles;