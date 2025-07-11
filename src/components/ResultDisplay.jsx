import "./ResultDisplay.css";

const ResultDisplay = ({ currentResult }) => {
  if (!currentResult) {
    return (
      <div className="result-display empty">
        <div className="result-icon">🎲</div>
        <div className="result-text">
          <h2>¡Lanza un dado!</h2>
          <p>Selecciona cualquier botón para empezar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="result-display active">
      <div className="result-header">
        <h3>Resultado del dado: {currentResult.diceName}</h3>
        <span className="result-sides">D{currentResult.sides}</span>
      </div>
      <div className="result-content">
        <div className="result-value">{currentResult.result}</div>
        <div className="result-time">
          Lanzado a las {currentResult.timestamp}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
