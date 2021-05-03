import React from 'react';

import classes from './Layout.module.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Nav></Nav>
            <main className={classes.Content}>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;
