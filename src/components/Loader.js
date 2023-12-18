import Spinner from 'react-bootstrap/Spinner';
import './styles/loader.css'
const Loader=()=>{
  return (
  <div className='loaderpage'>
    <Spinner className='loaderAnimation' animation="grow" />
    </div>
  )
}

export default Loader;