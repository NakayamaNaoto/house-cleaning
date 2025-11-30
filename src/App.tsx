import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import AirConditionerPage from "./pages/AirConditionerPage/AirConditionerPage";
import KitchenPage from "./pages/KitchenPage/KitchenPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/air-conditioner/*" element={<AirConditionerPage />} />
                <Route path="/kitchen/*" element={<KitchenPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
