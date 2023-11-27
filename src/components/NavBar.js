import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './styles/navbar.css'
import logo from './images/oalogo.svg'
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const NavBar =()=>{
  const phone='+59894414846'
    return(
        <>
        <Navbar className='nav'>
        <Container className='navBar'>
            <div className='logo'>
          <Navbar.Brand href="#home"><Link to='/'><img className='logoNav' src={logo}/></Link></Navbar.Brand>
          </div>
          <div className='buttonsNav'>
          <Nav className="me-auto buttonsNav">
            <a className='sections' href="#aboutme">Acerca de mi</a>
            <a className='sections' href="#articulos">Articulos</a>
            <a className='sections' href="#libro">Libro</a>
            <a className='sectionsIcon' href={`https://wa.me/${phone}`}><Icon name='whatsapp'/></a>
          </Nav>
          </div>
        </Container>
      </Navbar>
        </>
    )
}
export default NavBar
