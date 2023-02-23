import { Container } from 'react-bootstrap';
import React from 'react';

const Layout = (Props) => {
  return(
    <>
     <div><h1 style={{justifyContent: 'center', alignItems: 'center', display : 'flex'}}>BrandSaleList</h1></div>
      <Container>{Props.children}</Container>
      </>
  );
};






export default Layout;
