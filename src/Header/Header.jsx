import React from 'react';
import { Button } from '../Styled/Button.styled';
import { Container } from '../Styled/Container.styled';

const Header = () => {
  return (
    <>
        <Container>
            <Button bg="blue" color="#FFF">Log In</Button>
            <h3>This is Salim Hasan</h3>
            <Button bg="#000">Sign Up</Button>
        </Container>
    </>
  )
};

export default Header;