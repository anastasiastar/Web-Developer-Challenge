
import React, {Component} from 'react';
import { Navbar, Container } from 'react-bootstrap';
export default class Header extends Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Public API Applicatrion</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}