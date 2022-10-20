import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import StyleNav from './Navbar.module.css'

export function NavigationBar() {
    return (<>
        <Container className={StyleNav.box}>
            <Navbar bg="light" expand="xl">
                <div className={StyleNav.img}>
                    <Image src='/V.png' width='35.67px' height='35px' ></Image>
                    <Image src='/V1.png' width='82.55px' height='21.9px' className={StyleNav.img1}></Image>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={StyleNav.nav}>
                        <NavDropdown title="Acheter" id="basic-nav-dropdown" className={StyleNav.b}>

                        </NavDropdown>
                        <Nav.Link href="#Louer" className={StyleNav.b}>Louer</Nav.Link>
                        <NavDropdown title="Estimer" id="basic-nav-dropdown" className={StyleNav.b}>
                        </NavDropdown>
                        <Nav.Link href="#Prix immobiliers" className={StyleNav.b}>Prix immobiliers</Nav.Link>
                        <NavDropdown title="Crédit" id="basic-nav-dropdown" className={StyleNav.b}>
                        </NavDropdown>
                        <Nav.Link href="Agences" className={StyleNav.b}>Agences</Nav.Link>

                        <Nav.Link href="#Louer" className={StyleNav.c}>Arabe</Nav.Link>

                        <Nav.Link href="#Prix immobiliers" className={StyleNav.b}>Connexion</Nav.Link>

                        <Nav.Link href="Agences" className={StyleNav.b}>Offres pro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </>
    )
}