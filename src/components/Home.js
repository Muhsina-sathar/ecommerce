import React, { useEffect } from 'react'
import { useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import ProductCard from './ProductCard'
function Home() {
    const [items, setItems] = useState([])

    const fetchData = async () => {
        await fetch('/products.json')
            .then((res) => res.json())
            .then((data) => setItems(data))
    }

    useEffect(() => {

        fetchData()

    }, [])
    console.log(items) 

    return (
        <Row>
            {items.map((item)=>(
                 <Col className='py-3 px-2'  sm={12} md={8} lg={6} xl={3}>
                 <ProductCard data = {item}/>
                </Col>
                )
               
            )}
        </Row>
    )
}

export default Home