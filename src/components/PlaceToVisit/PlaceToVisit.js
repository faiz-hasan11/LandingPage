import React from 'react'
import ImageCard from './ImageCard/ImageCard'
import useStyles from "./Styles"
import data from "../../data/data"
import useWindowPosition from '../../hooks/useWindowPosition'
function PlaceToVisit() {
    const classes = useStyles()
    const checked = useWindowPosition("header")
    return (
        <div className={classes.root} id="place=to=visit">
            {
                data.map((item) =>
                (
                    <ImageCard item={item} checked={checked}/>
                ))
            }
            
        </div>
    )
}

export default PlaceToVisit
