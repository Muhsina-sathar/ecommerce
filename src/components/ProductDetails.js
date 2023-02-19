import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import { Row, Col, Image, ListGroup } from 'react-bootstrap'

function ProductDetails() {
  const [data, setData] = useState([])

  const params = useParams()

console.log(params['id']);

  const fetchData = async () => {
    await fetch('/products.json')
      .then((res) => res.json().then((data) =>setData(data))  )
  }
  console.log(data);

  useEffect(() => {
    fetchData()
  }, [])

  const details = data.find((i) => i.id == params.id)
  console.log(details);
  return (
    <div>
       {
        details ? (
          <Row className='my-3'>
           <Col md={3}>
            <Image className='img' src={details.image} fluid/>
           </Col>
           <Col md={4}>
            <ListGroup>
            <ListGroup.Item>
              <h2>
                {details.title}
                
              </h2>
              <h6>Category:{details.category}</h6>
              <p>
              Description:{details.description}
              </p>
              <h4>Price:{details.price}</h4>
            </ListGroup.Item>
            </ListGroup>
           
           </Col>
        </Row>
        
        ):'null'
        }

    </div>
  )
}


export default ProductDetails