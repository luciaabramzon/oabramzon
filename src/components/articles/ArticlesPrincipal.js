import NavBar from "../NavBar"
import MainArticles from "../articles/MainArticles"
import Footer from "../Footer"
import '../styles/cardArticles.css'
const ArticlesPrincipal=()=>{
return(
    <div className="articlesPrincipal">
    <NavBar/>
    <MainArticles/>
    <Footer/>
    </div>
)
}
export default ArticlesPrincipal