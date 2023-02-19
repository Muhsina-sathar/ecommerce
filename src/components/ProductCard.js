import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function productCard({data}) {
    console.log(data);
  return (
     <Link to={`details/${data.id}`}>
    <Card style={{height:"500px"}}>
        <Card.Img src={data.image} className="p-3" variant="top" style={{height:"350px"}}/>
        <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         <h5>Price:{data.price}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default productCard