import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById } from '../APICalls/coreapicalls';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Details = ({match}) => {
    const uid = useParams()
    const id = uid._id;
    const [customer, setCustomer] = useState([]);
    const [error, setError] = useState(false);

    const fetchCustomer =  () =>{
        getCustomerById(id).then((data) =>{
            if(data.error){
                setError(true)
            }
            else{
                setCustomer(data)
                console.log(data)
            }
        })

    }

    useEffect(() => {
        fetchCustomer()
    
     
    }, []);

    const classes = useStyles();

  return (
      <div>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/10007897/pexels-photo-10007897.jpeg?cs=srgb&dl=pexels-daria-zlatkina-10007897.jpg&fm=jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <span>Name: </span>{customer.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
          <span>Age: </span>{customer.age}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
          <span>Mobile: </span>{customer.mobile}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </div>
  )
};

export default Details;
