import './pages.css';

export default function TradePlanner() {

    const calcTrade = () => {
        var entry = document.getElementById("entry").value;
        var loss = document.getElementById("loss").value;
        var goal = document.getElementById("goal").value;
        var position = document.getElementById("position").value;

        if (entry === '' || loss === '' || goal === '')
            document.getElementById("results").innerHTML = "<br><font color = 'red'>Please make sure at least the first three fields are filled out.</font>";
        else if (isNaN(entry) || isNaN(loss) || isNaN(goal))
            document.getElementById("results").innerHTML = "<br><font color = 'red'>Please enter numbers only. (Decimals are fine)</font>";
        else {
            entry = parseFloat(entry);
            var lossPercent = parseFloat(loss)/100;
            var goalPercent = parseFloat(goal)/100;
            
            var lossPrice = (entry - (entry * lossPercent)).toFixed(4);
            var goalPrice = (entry + (entry * goalPercent)).toFixed(4);
            
            var msg =  "<br><br>Entry Price: $" + entry.toFixed(4) + "<br>"
            + "Risk to Reward Ratio: " + (goalPercent / lossPercent).toFixed(2) + "<br><br>"
            + "Place your stop loss at <i>$" + lossPrice + "</i> and sell at <i>$" + goalPrice
            + "</i><br><br>"

            document.getElementById("results").innerHTML = msg;
            
            if (position !== '') {
                if (!isNaN(position)) {
                    position = parseFloat(position);
                    var costBasis = position * entry;
                    var lossAmount = costBasis * lossPercent;
                    var profitAmount = costBasis * goalPercent;
                    
                    var msg2 = "Position Size: " + position + " shares<br>"
                    + "Cost Basis: $" + costBasis.toFixed(2) + "<br><br>"
                    + "If you sell all shares at a " + loss
                    + "% loss, you will lose $" + lossAmount.toFixed(2) + "<br>"
                    + "If you sell all your shares at a " + goal
                    + "% profit, you will make $" + profitAmount.toFixed(2);

                     document.getElementById("positionResults").innerHTML = msg2;
                }
                else
                    document.getElementById("positionResults").innerHTML = "<br><font color = 'red'>Please enter numbers only for your position size.</font>";
            }
            else
                document.getElementById("positionResults").innerHTML = '';
        }
    };

    return (
        <div className = 'page' id = 'trade-planner'>
            <h1>Trade Planner</h1>
            <p>
                The essential first step for every trade... make a plan!
                This page includes everything needed to plan out a successful
                trade before you execute it.

                Enter the price that you plan on entering the trade at, enter
                the maximum percentage loss you are willing to take, and
                enter your targeted profit goal.

                To get more accurate details about your trade plan, enter the
                amount of shares you plan to purchase, or the amount of money
                you will put in.
            </p>
            <h3>Thanks for using StockToolz2!</h3>

            <table>
            <tr><td><label>Entry Price: </label></td><td>$</td>
            <td><input type = "text" id = "entry" required /></td></tr>
            <tr><td><label>Maximum Loss: </label></td><td></td>
            <td><input type = "text" id = "loss" required /></td><td>%</td></tr>
            <tr><td><label>Profit Goal: </label></td><td></td>
            <td><input type = "text" id = "goal" required /></td><td>%</td></tr>
            <tr><td><label>Position Size: </label></td><td></td>
            <td><input type = "text" id = "position" placeholder = "optional" /></td></tr>
            </table>

            <br />
            <button onClick = {calcTrade}>Calculate Trade</button>

            <br />
            <div id = "results"></div>
            <div id = "positionResults"></div>
        </div>
    );
}