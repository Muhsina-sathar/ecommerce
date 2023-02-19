import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Row className='footer'>
                <Col className='py-1 text-center'>
                    copyright &copy; Machine test
                </Col>

            </Row>
        </footer>
    )
}

export default Footer