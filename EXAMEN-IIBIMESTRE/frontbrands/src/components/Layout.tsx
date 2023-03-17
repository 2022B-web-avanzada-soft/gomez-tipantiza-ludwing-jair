import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar, Nav } from 'react-bootstrap';

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {

    return (<>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/brands">Brands</Nav.Link>
                        <Nav.Link href="/watches">Watches</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        {children}
        <footer>
            <h1 style={{margin:"0", padding:"0"}}>CRUD BRAND-WATCH</h1>
        </footer>
    </>)
}




export default Layout