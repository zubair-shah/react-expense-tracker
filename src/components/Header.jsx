import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


const Header = () =>{
    return(
        <div>
         <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Expense Track</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            <header >
                <h1 className="text-center">
                    Expense Tracker by zubair shaikh
                  

                </h1>
            </header>
        </div>
    )
}
export default Header;