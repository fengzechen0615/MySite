import React from 'react';

import Nav from '../../Nav/Nav';
import Footer from '../../Footer/Footer';

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;
