import { Col, Row, Nav, Button } from 'react-bootstrap'
import StyleHalfGrid from './map.module.css'

export function Maps() {
    return (
        <>
            <Col className={StyleHalfGrid.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.524276525494!2d-5.2629775179201745!3d35.16848331136323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b2709494545c5%3A0x5072479d5be3e067!2sChefchaouen!5e0!3m2!1sfr!2sma!4v1666200852579!5m2!1sfr!2sma"
                    width="650px"
                    height="598px"
                    loading="lazy"
                ></iframe>
            </Col>
        </>
    )
}