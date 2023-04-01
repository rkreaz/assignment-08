import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navImg from '../../assets/image/pexels-photo-614810.webp'
import './Header.css'

function CollapsibleExample() {
    return (
        <Navbar className='text-bg-secondary p-3' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='knowledge-cafe text-white' href="/">Knowledge Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                        
                    </Nav>
                    <Nav className='nav_bar'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Question</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                    <div>
                        <img className='header_img' src={navImg} alt="" />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;