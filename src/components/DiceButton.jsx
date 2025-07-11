import { useState } from "react";
import "./DiceButton.css";

const DiceButton = ({ name, icon, items, onRoll }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    if (isRolling) return;

    setIsRolling(true);

    // Simular el efecto de lanzamiento
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const result = items[randomIndex];
      onRoll(name, result, items.length);
      setIsRolling(false);
    }, 800); // 800ms de animación
  };

  return (
    <button
      className={`dice-button ${isRolling ? "rolling" : ""}`}
      onClick={handleClick}
      disabled={isRolling}
    >
      <div className="dice-icon">{icon}</div>
      <div className="dice-name">{name}</div>
      <div className="dice-sides">D{items.length}</div>
      {isRolling && <div className="rolling-indicator">🎲</div>}
    </button>
  );
};

export default DiceButton;
