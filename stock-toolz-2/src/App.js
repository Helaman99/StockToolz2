import './App.css';
import Navbar from './components/Navbar.js';
import LandingPage from './pages/LandingPage.js'
import TradePlanner from './pages/TradePlanner.js';
import ProfitCalculator from './pages/ProfitCalculator.js';
import CostBasisTotal from './pages/CostBasisTotal.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className = "App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path = '/' element = {<LandingPage />} />
                    <Route path = '/trade-planner' element = {<TradePlanner />} />
                    <Route path = '/profit-calculator' element = {<ProfitCalculator />} />
                    <Route path = '/cost-basis-total' element = {<CostBasisTotal />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;