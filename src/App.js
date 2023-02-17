import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import NewInf from "./pages/NewInf/NewInf";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/hoc/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="portfolio" element={<PortfolioPage/>}/>
                    <Route path="newinf" element={<NewInf/>}/>

                </Route>
                <Route path="login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
