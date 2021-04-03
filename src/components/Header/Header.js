import React, { useEffect, useState } from 'react'
import {AppBar , Collapse, IconButton, Toolbar} from "@material-ui/core"
import SortIcon from "@material-ui/icons/Sort"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import useStyles from "./Styles"
import { Link as Scroll } from "react-scroll"

function Header({toggleHandler , isToggled}) {
    const classes = useStyles()
    const [checked,setChecked] = useState(false)

    useEffect(() =>
    {
        setChecked(true)
    },[])


    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.wrapper}>
                    <h1 className={classes.title}>Heading</h1>
                    <IconButton>
                        <SortIcon className={classes.icon} onClick={toggleHandler}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={true}>
            <div className={classes.container}>
                <h1 className={classes.titleCenter}>Welcome To My HomePage</h1>
                {
                    isToggled ?
                        <>
                        </>
                :
                <Scroll to="place=to=visit" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
                </Scroll>
                }

            </div>
            </Collapse>
        </div>
    )
}

export default Header
