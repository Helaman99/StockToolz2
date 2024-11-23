import './components.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div id = 'Navbar'>
            <div id = 'nav-buttons'>
                <Link to = '/' id = 'Logo'>StockToolz2</Link>
                <Link to = '/trade-planner'>Trade Planner</Link>
                <Link to = '/profit-calculator'>Profit Calculator</Link>
                <Link to = '/cost-basis-total'>Cost Basis Total Calculator</Link>
            </div>
            <div id = 'line'></div>
        </div>
    );
}