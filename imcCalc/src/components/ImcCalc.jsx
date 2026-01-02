import "./ImcCalc.css";
import Button from "./Button"; 

const ImcCalc = () => {
  return (
    <div id="calc-container">
        <h2>IMC Calculator</h2>
        <form id ="imc-form">
            <div className="forms-inputs">
                <div className="form-control">
                    <label htmlFor="height">Height:</label>
                    <input type="text" name="height" id="height" placeholder="Example 1.75" />
                </div>
                <div className='form-control'>
                    <label htmlFor="weight">Weight:</label>
                    <input type="text" 
                    name="weight"
                    id="weight"
                    placeholder="Example 70.5"/>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calculate"/>
                    <Button id="clear-btn" text="Reset"/>

                </div>
            </div>
        </form>
      
    </div>
  );
};

export default ImcCalc
