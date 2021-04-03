import React from 'react'
import {animated , useSpring} from "react-spring"
import useStyles from "./styles"
function Menu({toggled}) {
    const classes = useStyles()

    const {x} = useSpring({
        x: toggled ? 0 : 100
    })

    return (
        <animated.div className={classes.navwrapper} style={{transform:x.interpolate(x => `translate3d( ${x * -1}%, ${x * -1}% ,0)`)}}>
            <center>
            <nav className={classes.nav}>
                <h1>Homne</h1>
            </nav>
            </center>
        </animated.div>
    )
}

export default Menu
