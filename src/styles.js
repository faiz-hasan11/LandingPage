import {makeStyles} from "@material-ui/core/styles"
import Image from "./images/shattered-island.gif"

const useStyles = makeStyles((theme) => ({
    "@global":{
        "*::-webkit-scrollbar" :{
    display: "none"
    }
    },
    root:{
        minHeight: "100vh",
        backgroundImage:  `url(${Image})`,
    },
    loader:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }
    
}))

export default useStyles;