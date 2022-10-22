import React from 'react'
import styled from 'styled-components'
import { ReactComponent as  UserIc} from "../assets/user-svg.svg"

import { styled as styledMui } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreIcon from '@mui/icons-material/ReadMore'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteFunc } from '../store/actions';


function ProductBox(product) {
  // const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch()

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
    
    const ExpandMore = styledMui((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
      

  return (
    <Wrapper>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar >
            <UserIc/>
          </Avatar>
        }
        action={
          <IconButton onClick={() => dispatch(deleteFunc(product.id))} aria-label="settings">
            {/* <MoreVertIcon /> */}
            <DeleteIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className='image'
        component="img"
        height="194"
        image={"http://142.93.246.144/" + product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography marginBottom='10px' variant="h5" color="#101010" fontWeight='600' >
            {product.title}
        </Typography>
        <Typography variant="h6" color="#101010" fontWeight='600' >
            $ {product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
          <Link to={`products/${product.id}`} className='product'>
            <ExpandMore>
              <span> Read more</span> <MoreIcon /> 
            </ExpandMore>
          </Link>
      </CardActions>
    </Card>
    </Wrapper>
  )
}

export default ProductBox

const Wrapper = styled.div `
    .image {
        object-fit: contain;
        margin-bottom: 10px;
    }

    .product {
      display: flex;
      align-items: center;
      gap: 5px;     
      margin-left: auto;
    }

    span {
      font-size: 14px;
      margin-right: 7px;
    }
`