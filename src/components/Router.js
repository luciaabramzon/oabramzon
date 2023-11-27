import { BrowserRouter, Route, Routes } from "react-router-dom"
import Start from './Start'
import MainArticles from './articles/MainArticles'
import ArticlesPrincipal from "./articles/ArticlesPrincipal"
import IsraelPalestina from "./articles/israelPalestina"
import Matrimonio from "./articles/matrimonio"

const Router=()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Start/>}/>
    <Route exact path='/articles' element={<ArticlesPrincipal/>}/>
    <Route exact path="/israel-palestina" element={<IsraelPalestina/>}/>
    <Route exact path="/matrimonio" element={<Matrimonio/>}/>
  </Routes>
  </BrowserRouter>
)
}
export default Router