import { BrowserRouter, Route, Routes } from "react-router-dom"
import Start from './Start'
import MainArticles from './articles/MainArticles'
import ArticlesPrincipal from "./articles/ArticlesPrincipal"
import IsraelPalestina from "./articles/israelPalestina"
import Matrimonio from "./articles/matrimonio"
import PsicologiaEnVacaciones from "./articles/psicologiaEnVacaciones"
import SeMira from "./articles/seMira"
import MeAburro from "./articles/meAburro"

const Router=()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Start/>}/>
    <Route exact path='/articles' element={<ArticlesPrincipal/>}/>
    <Route exact path="/israel-palestina" element={<IsraelPalestina/>}/>
    <Route exact path="/matrimonio" element={<Matrimonio/>}/>
    <Route exact path='/psicologia-para-leer-en-vacaciones' element={<PsicologiaEnVacaciones/>}/>
    <Route exact path='/en-el-verano-se-mira-y-no-se-toca' element={<SeMira/>}/>
    <Route exact path='/porque-me-aburro' element={<MeAburro/>}/>
  </Routes>
  </BrowserRouter>
)
}
export default Router