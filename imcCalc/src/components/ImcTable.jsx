import './ImcTable.css'

const ImcTable = ({data, imc, info, infoClass, resetCalc}) => {
  return (
    <div id='result-container'>
      <p id="imc-number">BMI: <span className={infoClass}>{imc} </span> </p>
      <p id="imc-info">Current Situation: <span className={infoClass}>{info}</span></p>
      <h3>Check the weight classifications:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>BMI</h4>
          <h4>Classification</h4>
          <h4>Obesity</h4>
        </div>
        {data.map((item)=>(
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <button id="back-btn" text="voltar" onClick= {resetCalc}>Return</button>
    </div>
  )
}

export default ImcTable
