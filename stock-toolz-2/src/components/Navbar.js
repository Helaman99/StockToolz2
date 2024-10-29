import './components.css';

export default function Navbar() {
    return(
        <div id = 'Navbar'>
            <button id = 'Logo'>StockToolz2</button>
            <Navbutton text = 'Trade Planner' />
            <Navbutton text = 'Profit Calculator' />
            <Navbutton text = 'Cost Basis Total Calculator' />
        </div>
    );
}

function Navbutton({ text }) {
    return(
        <button className = 'Navbutton'>
            <p>{ text }</p>
        </button>
    );
}