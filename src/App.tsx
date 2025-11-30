import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AirConditionerPage from "./pages/AirConditionerPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/air-conditioner/*" element={<AirConditionerPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
