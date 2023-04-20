import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Headerbar() {
    return (
        <Navbar className='shadow-sm p-3 mb-5 bg-white rounded'>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="../images/airbnb-logo.png"
                        className="h-[26px] d-inline-block align-top"
                        alt="Airbnb Logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
