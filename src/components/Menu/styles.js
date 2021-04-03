import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    navwrapper:
    {
        position:"fixed",
        top:"0",
        bottom:"0",
        right:"0",
        left:"0",
        backgroundColor:"#e67e22",
    },
    nav:
    {
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    }
}))

export default useStyles;