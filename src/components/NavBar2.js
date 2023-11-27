import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './styles/navbar.css'
import logo from './images/oalogo.svg'
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const NavBar2 =()=>{
  const phone='+59894414846'
    return(
        <>
        <Navbar className='nav' id='NavBar'>
        <Container className='navBar'>
            <div className='logo'>
          <Navbar.Brand href="#home"><Link to='/'><img className='logoNav' src={logo}/></Link></Navbar.Brand>
          </div>
          <div className='buttonsNav'>
          <Nav className="me-auto buttonsNav">
           <Link to='/' className='sections'> Acerca de mi</Link> 
            <Link to='/' className='sections'>Articulos</Link>
            <Link to='/' className='sections' href="#libro">Libro</Link>
            <Link to ='/' className='sectionsIcon' href={`https://wa.me/${phone}`}><Icon name='whatsapp'/></Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
        </>
    )
}
export default NavBar2