import './Header.css';
import logo from '../../assets/imgs/logo.png';
import {Navbar,Nav,NavDropdown, Container} from 'react-bootstrap';

const Header = (props) => {
    return (
<div >

 <Navbar expand="md" variant="dark" className='cyborg-navbar '>
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <div className='menu'>
    <Nav className="mr-auto" >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Browse">Browse</Nav.Link>
      <NavDropdown title="Details" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/Fortnite">Fortnite</Nav.Link>
      <Nav.Link href="/Profile"> Profile </Nav.Link>
    </Nav>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar> 

</div>

    );
}

export default Header;
