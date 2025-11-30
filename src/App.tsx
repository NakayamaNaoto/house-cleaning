import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage/HomePage";
import AirConditionerPage from "./pages/AirConditionerPage/AirConditionerPage";
import KitchenPage from "./pages/KitchenPage/KitchenPage";
import WashingMachinePage from "./pages/WashingMachinePage/WashingMachinePage";
import OtherPlansPage from "./pages/OtherPlansPage/OtherPlansPage";
import SetPlansPage from "./pages/SetPlansPage/SetPlansPage";

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/air-conditioner/*" element={<AirConditionerPage />} />
                <Route path="/kitchen/*" element={<KitchenPage />} />
                <Route path="/washing-machine/*" element={<WashingMachinePage />} />
                <Route path="/other-plans/*" element={<OtherPlansPage />} />
                <Route path="/set-plans/*" element={<SetPlansPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
