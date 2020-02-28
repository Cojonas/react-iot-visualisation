import logo from '../Pfeiffer-Vacuum-Logo.png';
import React from "react"
import styled from 'styled-components';


const Span = styled.span`
font-size: 25px;
color: #c03;
line-height: 1;
vertical-align: middle;
padding-left: 10px;
` 


const Logo = styled.img`
height: 60px;
padding: 2px 0px;
width: auto; 
margin: auto;
vertical-align: middle;
line-height: 1;
`

const Container = styled.div`
line-height:1;
vertical-align: middle;
`

function Header() {


    return  <Container>
                <Logo src={logo}  alt="logo" />
                <Span>Cloud Services</Span>
    </Container>

}

export default Header
