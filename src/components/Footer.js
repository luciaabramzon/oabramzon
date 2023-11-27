import logo from './images/oalogo.svg'
import { Icon } from 'semantic-ui-react'
import './styles/footer.css'
import { Link } from 'react-router-dom'
const Footer=()=>{
    const phone='+59894414846'
    const emailAddress = 'oabramzon@yahoo.com'
    return(
        <footer className="footerStart">
            <div className="footerLogoDiv">
            <Link to='/'><img className='footerLogo' src={logo}/></Link>    
            </div>
            <div className='footerContactDiv'>
            <a href={`mailto:${emailAddress}`}><Icon className='mail outline footerIcon'/></a>
            <a href={`https://wa.me/${phone}`}> <Icon className='whatsapp footerIcon'/></a>
            </div>
        </footer>
    )
}
export default Footer