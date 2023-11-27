import NavBar from "../NavBar"
import MainArticles from "../articles/MainArticles"
import Footer from "../Footer"
import '../styles/cardArticles.css'
import NavBar2 from "../NavBar2"
const ArticlesPrincipal=()=>{
return(
    <div className="articlesPrincipal">
    <NavBar2/>
    <MainArticles/>
    <Footer/>
    </div>
)
}
export default ArticlesPrincipal