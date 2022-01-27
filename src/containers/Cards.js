import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

const Cards = ({ customer, deleteCust }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/10007897/pexels-photo-10007897.jpeg?cs=srgb&dl=pexels-daria-zlatkina-10007897.jpg&fm=jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            <span>Name: </span>
            {customer.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            <span>Age: </span>
            {customer.age}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            <span>Mobile: </span> {customer.mobile}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='actions'>
        <Typography gutterBottom variant="h6" component="h6">
          <Link to={`/update/${customer._id}`} style={{ textDecoration: "none" }}  target="_blank" > 
            <Button variant="outlined" color="success">Update</Button>
          </Link>
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          <Link
            to={`/customer/${customer._id}/`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" color="success">
              Details
            </Button>
          </Link>
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              deleteCust(customer._id);
            }}
          >
            Delete
          </Button>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Cards;
