import React from 'react'
// import { Link } from 'react-router-dom'
import * as C from '../AppStyled'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';

export const Header =  (props) => {

    // I need kwon which page is. Todo page or Login page!!!!
    
    return (
        <C.navStyle>    
            <Navbar>
                <Nav>
                    <Navbar.Brand href="#Header"><strong>EShop</strong></Navbar.Brand>
                    {/* <Link to={'/'} className='register'>To-do</Link> */}
                    {/* <Link to={'/login'} className='register'>{props.name}</Link> */}
                </Nav>            
            </Navbar>
        </C.navStyle>
    )
}