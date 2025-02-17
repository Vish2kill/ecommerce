import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <Link to="/" >
        {/* <img src="./images/logo.png" alt="my_logo_img" /> */}
        <h1> <span style={{color:'red'}}>Vish</span><span  style={{color:'grey'}}>2kill</span></h1>
      </Link>
      <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header