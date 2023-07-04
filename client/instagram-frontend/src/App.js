import "./App.css";
import { Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router />
      <Sidebar />
    </div>
  );
}

export default App;
