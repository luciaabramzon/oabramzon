import { useEffect, useState } from "react"
import AboutMe from "./AboutMe"
import Articles from "./Articles"
import Book from "./Book"
import Footer from "./Footer"
import Loader from "./Loader"
import NavBar from "./NavBar"
import Photo from "./Photo"
import './styles/start.css'

const Start=()=>{
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {

        const loadingTimeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    
        return () => {
          clearTimeout(loadingTimeout);
        };
        
      }, []);
    return(
        <>

        <NavBar/>
        {isLoading? (<Loader/>):(
            <>
                    <Photo/>
 
            <AboutMe/>
 <Articles/>
 <Book/>
            </>
        )}

        <Footer/>
        </>
    )
}

export default Start