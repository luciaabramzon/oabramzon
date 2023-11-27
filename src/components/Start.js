import AboutMe from "./AboutMe"
import Articles from "./Articles"
import Book from "./Book"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Photo from "./Photo"
import './styles/start.css'

const Start=()=>{
    return(
        <>
        <div className="first">
        <NavBar/>
        <Photo/>
        </div>
        <AboutMe/>
        <Articles/>
        <Book/>
        <Footer/>
        </>
    )
}

export default Start