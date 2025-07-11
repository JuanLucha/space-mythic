import { useState } from "react";
import "./App.css";
import DiceDashboard from "./components/DiceDashboard";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Panel de Control Espacial</h1>
        <p>Tablas d100 para Aventura de Superhéroes en el Espacio</p>
      </header>
      <main>
        <DiceDashboard />
      </main>
    </div>
  );
}

export default App;
