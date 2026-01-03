import { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";
import { data } from "./data/data";

function App() {

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");


  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    if (!weightFloat || !heightFloat) return;

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setImc(imcResult);


    const imcNumber = Number(imcResult);
    const imcInfo = data.find(
      (item) => imcNumber >= item.min && imcNumber <= item.max
    );

    if (imcInfo) {
      setInfo(imcInfo.info);
      setInfoClass(imcInfo.infoClass);
    } else {
      setInfo("");
      setInfoClass("");
    }

  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };



  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable 
        data={data} 
        imc={imc} 
        info={info} 
        infoClass={infoClass}  
        resetCalc={resetCalc} 
        />
      )}
    </div>
  );
}

export default App;
