import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    background:"rgba(0,0,0,0.5)",
    margin:"20px"
  },
  media:
  {
      height:340
  }
});

export default function ImageCard( {item , checked} ) {
  const classes = useStyles();
  return (
      <Collapse in={checked} {...(checked ? { timeout:1500 } : {} )}>
        <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"white"}}>
            <strong>{item.title}</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"#ddd"}}>
                {item.text}
          </Typography>
        </CardContent>
    </Card>
      </Collapse>
    
  );
}