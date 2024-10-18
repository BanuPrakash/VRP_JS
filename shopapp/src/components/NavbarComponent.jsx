import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { Badge } from 'react-bootstrap';

export default function NavbarComponent() {
  let {quantity} = useContext(CartContext);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/products">VISA Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} color="white" />
            <Badge>
              {quantity}
            </Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/new_product">Product form</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
